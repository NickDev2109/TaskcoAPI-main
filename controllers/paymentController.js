const stripe = require('../utils/stripe');
const Task = require('../models/Task');

exports.addPaymentMethod = async (req, res) => {
  try {
    const { payment_method_id } = req.body;

    // Attach to customer (create Stripe customer if needed)
    let customer = await stripe.customers.create({ email: req.user.email });
    await stripe.paymentMethods.attach(payment_method_id, { customer: customer.id });

    await stripe.customers.update(customer.id, {
      invoice_settings: { default_payment_method: payment_method_id }
    });

    res.status(200).json({ message: 'Payment method added' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add payment method' });
  }
};

exports.escrowPayment = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(task.budget * 100), // in cents
      currency: 'usd',
      description: `Escrow for Task #${task.id}`,
      capture_method: 'manual',
      metadata: { task_id: task.id }
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Escrow payment failed' });
  }
};

exports.releasePayment = async (req, res) => {
  try {
    const { payment_intent_id } = req.body;

    const intent = await stripe.paymentIntents.capture(payment_intent_id);
    res.status(200).json({ message: 'Payment released', intent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Payment release failed' });
  }
};

exports.paymentHistory = async (req, res) => {
  try {
    const charges = await stripe.charges.list({
      limit: 10,
    });

    res.status(200).json({ charges });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch history' });
  }
};
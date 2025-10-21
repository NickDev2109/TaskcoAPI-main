const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const paymentController = require('../controllers/paymentController');

router.post('/method', auth, paymentController.addPaymentMethod);
router.post('/escrow/:taskId', auth, paymentController.escrowPayment);
router.post('/release/:taskId', auth, paymentController.releasePayment);
router.get('/history', auth, paymentController.paymentHistory);

module.exports = router;
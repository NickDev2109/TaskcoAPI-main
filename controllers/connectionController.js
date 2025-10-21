const Connection = require('../models/Connection');
const User = require('../models/User');
const Profile = require('../models/Profile');

// POST /connections/send
exports.sendConnectionRequest = async (req, res) => {
  const { receiver_id } = req.body;
  const sender_id = req.user.id;

  const exists = await Connection.findOne({
    where: { sender_id, receiver_id }
  });

  if (exists) return res.status(400).json({ message: 'Request already sent or exists' });

  const connection = await Connection.create({ sender_id, receiver_id });
  res.status(201).json({ message: 'Connection request sent', connection });
};

// POST /connections/undo
exports.undoRequest = async (req, res) => {
  const { receiver_id } = req.body;
  const sender_id = req.user.id;

  const connection = await Connection.findOne({
    where: { sender_id, receiver_id, status: 'pending' }
  });

  if (!connection) return res.status(404).json({ message: 'No pending request found' });

  await connection.destroy();
  res.status(200).json({ message: 'Connection request undone' });
};

// POST /connections/accept
exports.acceptRequest = async (req, res) => {
  const { sender_id } = req.body;
  const receiver_id = req.user.id;

  const connection = await Connection.findOne({
    where: { sender_id, receiver_id, status: 'pending' }
  });

  if (!connection) return res.status(404).json({ message: 'Request not found' });

  connection.status = 'accepted';
  await connection.save();
  res.status(200).json({ message: 'Connection accepted', connection });
};

// GET /connections
exports.getMyConnections = async (req, res) => {
  const user_id = req.user.id;

  const connections = await Connection.findAll({
    where: {
      [Connection.sequelize.Op.or]: [
        { sender_id: user_id, status: 'accepted' },
        { receiver_id: user_id, status: 'accepted' }
      ]
    }
  });

  res.json({ connections });
};

// GET /connections/request/:user_id
exports.getFriendRequests = async (req, res) => {
  const { user_id } = req.params;

  const requests = await Connection.findAll({
    where: { receiver_id: user_id, status: 'pending' },
    include: [{
      model: User,
      as: 'sender_user',
      attributes: ['id', 'email'],
      include: [{
        model: Profile,
        as: 'profile',
        attributes: ['fullName', 'profile_img_url', 'user_id']
      }]
    }]
  });

  res.json({ requests });
};
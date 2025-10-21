const Notification = require('../models/Notification');
const User = require('../models/User');
const Profile = require('../models/Profile');

exports.getNotifications = async (req, res) => {
  try {
    const notifs = await Notification.findAll({
      where: { user_id: req.user.id },
      order: [['created_at', 'DESC']],
      include: [
        {
          model: User,
          as: 'sender',              // ← alias must match your association
          attributes: ['id', 'email', 'role'],
          include: [{
            model: Profile
          }]
        }
      ]
    });
    res.json(notifs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to load notifications' });
  }
};

// PATCH /notifications/:id/read
exports.markAsRead = async (req, res) => {
  const notif = await Notification.findByPk(req.params.id);
  if (!notif || notif.user_id !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  notif.is_read = true;
  await notif.save();
  res.json({ message: 'Marked as read', notif });
};

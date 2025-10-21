const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Notification = sequelize.define('Notification', {
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.STRING },
  message: { type: DataTypes.STRING },
  is_read: { type: DataTypes.BOOLEAN, defaultValue: false },
  task_id: { type: DataTypes.INTEGER },
  sender_id: { type: DataTypes.INTEGER },
  message_id: { type: DataTypes.INTEGER },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });



module.exports = Notification;
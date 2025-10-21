const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User')

const Connection = sequelize.define('Connection', {
  sender_id: { type: DataTypes.INTEGER, allowNull: false },
  receiver_id: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM('pending', 'accepted'),
    defaultValue: 'pending'
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });



module.exports = Connection;
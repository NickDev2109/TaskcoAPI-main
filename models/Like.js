// models/Like.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User      = require('./User');

const Like = sequelize.define('Like', {
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  post_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
  timestamps:      false,
  freezeTableName: true,
  underscored:     true
});

Like.belongsTo(User, {
  as:         'user',
  foreignKey: 'user_id'
});

module.exports = Like;

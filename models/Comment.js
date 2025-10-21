// models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User      = require('./User');

const Comment = sequelize.define('Comment', {
  user_id:    { type: DataTypes.INTEGER, allowNull: false },
  post_id:    { type: DataTypes.INTEGER, allowNull: false },
  content:    { type: DataTypes.TEXT,    allowNull: false },
  created_at: { type: DataTypes.DATE,    defaultValue: DataTypes.NOW }
}, {
  timestamps:      false,
  freezeTableName: true,
  underscored:     true
});

Comment.belongsTo(User, {
  as:         'user',
  foreignKey: 'user_id'
});

module.exports = Comment;

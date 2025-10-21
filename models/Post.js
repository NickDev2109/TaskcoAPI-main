// models/Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Post = sequelize.define('Post', {
  user_id:    { type: DataTypes.INTEGER, allowNull: false },
  content:    { type: DataTypes.TEXT,    allowNull: false },
  media_urls: { type: DataTypes.JSON,    allowNull: true },  // ← new!
  created_at: { type: DataTypes.DATE,    defaultValue: DataTypes.NOW }
}, {
  timestamps:      false,
  freezeTableName: true,
  underscored:     true
});

Post.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id'
});

module.exports = Post;

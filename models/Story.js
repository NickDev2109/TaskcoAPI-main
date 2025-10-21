// models/Story.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User')

const Story = sequelize.define('Story', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  story_image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  swipe_text: {
    type: DataTypes.STRING,
    allowNull: true
  },
  views: { 
    type: DataTypes.INTEGER, 
    defaultValue: 0 
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'stories',
  timestamps: false,
  underscored: true,
});

Story.belongsTo(User, {
  as:         'story_user',
  foreignKey: 'user_id'
});

module.exports = Story;

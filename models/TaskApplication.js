const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TaskApplication = sequelize.define('TaskApplication', {
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tasker_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cover_note: {
    type: DataTypes.TEXT, // FIX: You had it as INT(11), should be TEXT
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('applied', 'shortlisted', 'rejected'),
    defaultValue: 'applied'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

module.exports = TaskApplication;

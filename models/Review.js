const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Review = sequelize.define('Review', {
  task_id: { type: DataTypes.INTEGER, allowNull: false },
  reviewer_id: { type: DataTypes.INTEGER, allowNull: false },
  tasker_id: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.DECIMAL(2, 1), allowNull: false },
  comment: { type: DataTypes.TEXT, allowNull: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });

module.exports = Review;
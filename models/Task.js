const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User      = require('./User');
const Profile   = require('./Profile');


const Task = sequelize.define('Task', {
  poster_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tasker_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  title: DataTypes.STRING,
  category: DataTypes.STRING,
  description: DataTypes.TEXT,
  budget: DataTypes.DECIMAL(10, 2),
  location_lat: DataTypes.DECIMAL(10, 6),
  location_lng: DataTypes.DECIMAL(10, 6),
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  scheduled_at: DataTypes.DATE,
  status: {
    type: DataTypes.ENUM('posted', 'hired', 'completed', 'paid'),
    defaultValue: 'posted'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

// A Task was posted by a User
Task.belongsTo(User, {
  as:         'poster',
  foreignKey: 'poster_id'
});
// A Task may be assigned to a tasker
Task.belongsTo(User, {
  as:         'tasker',
  foreignKey: 'tasker_id'
});


module.exports = Task;

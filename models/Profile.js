const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Profile = sequelize.define('Profile', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fullName: DataTypes.STRING,
  bio: DataTypes.TEXT,
  avatar_url: DataTypes.STRING,
  rating: {
    type: DataTypes.DECIMAL(2, 1),
    defaultValue: 5.0
  },
  home_lat: DataTypes.DECIMAL(10, 6),
  home_lng: DataTypes.DECIMAL(10, 6),
  service_radius: DataTypes.INTEGER,
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'banned'),
    defaultValue: 'active'
  },
  approved_by_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  skills: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  availability: {
    type: DataTypes.JSON, 
    allowNull: true
  },
  per_hour_rate: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00
  },
  cover_img_url: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: '/uploads/cover.png'
  },
  profile_img_url: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: '/uploads/profile.png'
  }
  
});

module.exports = Profile;

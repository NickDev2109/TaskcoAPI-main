const { DataTypes } = require('sequelize');
const sq = require('sequelize');
const sequelize = require('../config/db');

const Profile = require('./Profile');


const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true // if social login or OTP-based
  },
  role: {
    type: DataTypes.ENUM('tasker', 'poster', 'admin'),
    defaultValue: 'poster'
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  email_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  phone_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  otp_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otp_sent_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  reset_code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  reset_code_expires: {
    type: DataTypes.DATE,
    allowNull: true
  },
  kyc_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  provider: {
    type: DataTypes.ENUM('email', 'google', 'apple'),
    defaultValue: 'email'
  },
  socialToken: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'users',
  underscored: true,
});

User.hasOne(Profile, { foreignKey: 'user_id', as: 'profile' });
Profile.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

module.exports = User;

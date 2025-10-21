const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./User');
const Profile = require('./Profile');
const TaskApplication = require('./TaskApplication');
const Task = require('./Task');
const Notification = require('./Notification');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Like');
const Story = require('./Story');
const Connection = require('./Connection');
const Message = require('./Chat');
const Review = require('./Review');


User.hasOne(Profile, { foreignKey: 'user_id' });
Profile.belongsTo(User, { foreignKey: 'user_id' });

TaskApplication.belongsTo(User, { foreignKey: 'tasker_id' });
User.hasMany(TaskApplication, { foreignKey: 'tasker_id' });

TaskApplication.belongsTo(Task, { foreignKey: 'task_id' });
Task.hasMany(TaskApplication, { foreignKey: 'task_id' });

Notification.belongsTo(User, { foreignKey: 'sender_id', as: 'sender' });
User.hasMany(Notification, { foreignKey: 'sender_id', as: 'sentNotifications' });


// a Post has many Comments
Post.hasMany(Comment, { foreignKey: 'post_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });

// a Post has many Likes
Post.hasMany(Like, { foreignKey: 'post_id' });
Like.belongsTo(Post, { foreignKey: 'post_id' });

User.hasMany(Story, { foreignKey: 'user_id', as: 'stories' });
Story.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(Message, { foreignKey: 'sender_id', as: 'SentMessages' });
User.hasMany(Message, { foreignKey: 'receiver_id', as: 'ReceivedMessages' });

// Connection associations
User.hasMany(Connection, { foreignKey: 'sender_id', as: 'sentConnections' });
User.hasMany(Connection, { foreignKey: 'receiver_id', as: 'receivedConnections' });
Connection.belongsTo(User, { foreignKey: 'sender_id', as: 'sender_user' });
Connection.belongsTo(User, { foreignKey: 'receiver_id', as: 'receiver_user' });

// Review associations
Review.belongsTo(User, { foreignKey: 'reviewer_id', as: 'reviewer_user' });
Review.belongsTo(User, { foreignKey: 'tasker_id', as: 'tasker_user' });
User.hasMany(Review, { foreignKey: 'reviewer_id', as: 'reviews_given' });
User.hasMany(Review, { foreignKey: 'tasker_id', as: 'reviews_received' });

const db = {
  sequelize,
  Sequelize,
  User,
  Profile,
  Post,
  Comment,
  Like,
  Story,
  Connection,
  Message,
  Review
};

module.exports = db;

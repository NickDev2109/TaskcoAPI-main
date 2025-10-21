const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Message = sequelize.define('Message', {
    content: { type: DataTypes.TEXT, allowNull: true },
    sender_id: { type: DataTypes.INTEGER, allowNull: false },
    receiver_id: { type: DataTypes.INTEGER, allowNull: false },
    type: {
        type: DataTypes.ENUM("text", "image", "video", "document", "voice"),
        allowNull: false,
        defaultValue: "text",
    },
    attachment_url: { type: DataTypes.STRING, allowNull: true },
});

Message.belongsTo(User, { as: 'sender', foreignKey: 'sender_id' });
Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiver_id' });

module.exports = Message;
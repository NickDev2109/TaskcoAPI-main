const { Op } = require('sequelize');
const { Message, User, Profile } = require('../models');

exports.getChatList = async (req, res) => {
  const userId = parseInt(req.params.userId);

  const messages = await Message.findAll({
    where: {
      [Op.or]: [
        { sender_id: userId },
        { receiver_id: userId }
      ]
    },
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: User, as: 'sender', include: [{
          model: Profile,
          as: 'profile',
          attributes: ['fullName', 'cover_img_url', 'profile_img_url', 'rating', 'status']
        }]
      },
      {
        model: User, as: 'receiver', include: [{
          model: Profile,
          as: 'profile',
          attributes: ['fullName', 'cover_img_url', 'profile_img_url', 'rating', 'status']
        }]
      }
    ]
  });

  const chatMap = {};

  for (let msg of messages) {
    const otherUser = msg.sender_id === userId ? msg.receiver : msg.sender;
    if (!chatMap[otherUser.id]) {
      chatMap[otherUser.id] = {
        user: otherUser,
        lastMessage: {
          id: msg.id,
          content: msg.content,
          type: msg.type,
          attachmentUrl: msg.attachmentUrl,
          createdAt: msg.createdAt
        }
      };
    }
  }

  res.json(Object.values(chatMap));
};

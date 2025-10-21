const { getChatList } = require('../controllers/chatController');

const router = require('express').Router();

router.get('/chat-list/:userId', getChatList);

module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const connectionController = require('../controllers/connectionController');

router.post('/send', auth, connectionController.sendConnectionRequest);
router.post('/undo', auth, connectionController.undoRequest);
router.post('/accept', auth, connectionController.acceptRequest);
router.get('/', auth, connectionController.getMyConnections);
router.get('/request/:user_id', auth, connectionController.getFriendRequests);

module.exports = router;
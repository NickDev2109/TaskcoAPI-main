const express = require('express');
const router = express.Router();
const matchController = require('../controllers/taskMatchController');
const auth = require('../middleware/auth');

router.post('/match-taskers', auth, matchController.matchTaskers);
router.get('/taskers/discover', auth, matchController.discoverTaskers);
router.get('/taskers/categories-near-me', auth, matchController.getNearbyCategories);

module.exports = router;
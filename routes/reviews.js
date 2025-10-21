const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const reviewController = require('../controllers/reviewController');

router.post('/tasker', auth, reviewController.createReview);
router.get('/tasker/:id', reviewController.getTaskerReviews);

module.exports = router;
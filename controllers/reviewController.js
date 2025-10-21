const Review = require('../models/Review');
const Task = require('../models/Task');
const Profile = require('../models/Profile');
const User = require('../models/User'); // Added User model import
const { Op } = require('sequelize');

// POST /reviews/tasker/:id
exports.createReview = async (req, res) => {
  try {
    const { rating, comment, task_id } = req.body;
    const tasker_id = req.body?.tasker_id || req?.body?.poster_id;

    console.log("called: ", {
      id: task_id,
      poster_id: req.body?.poster_id || req.user.id,
      tasker_id: req.body?.tasker_id || req.user.id,
      // status: 'paid' uncomment after escrow payment
    });

    // Confirm user has completed the task with this tasker
    const task = await Task.findOne({
      where: {
        id: task_id,
        poster_id: req.body?.poster_id || req.user.id,
        tasker_id: req.body?.tasker_id || req.user.id,
        // status: 'paid' uncomment after escrow payment
      }
    });

    if (!task) return res.status(403).json({ message: 'Invalid review request' });

    const review = await Review.create({
      task_id,
      reviewer_id: req.user.id,
      tasker_id,
      rating,
      comment
    });

    // Update tasker's average rating
    const result = await Review.findAll({
      where: { tasker_id }
    });

    const avg = result.reduce((sum, r) => sum + parseFloat(r.rating), 0) / result.length;

    const profile = await Profile.findOne({ where: { user_id: tasker_id } });
    if (profile) {
      profile.rating = avg.toFixed(1);
      await profile.save();
    }

    res.status(201).json({ message: 'Review submitted', review });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to submit review' });
  }
};

// GET /reviews/tasker/:id
exports.getTaskerReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { tasker_id: req.params.id },
      include: [
        {
          model: User,
          as: 'reviewer_user',
          include: [
            {
              model: Profile,
              as: 'profile',
            }
          ]
        }
      ],
      order: [['created_at', 'DESC']]
    });
    res.json({ reviews });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
};
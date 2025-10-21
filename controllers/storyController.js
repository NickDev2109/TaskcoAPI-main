// controllers/storyController.js
const { User, Profile, Story } = require('../models');
const path = require('path');

exports.createStory = async (req, res) => {
  try {
    const { swipe_text } = req.body;
    const file = req.file; // <- multer.single

    if (!file) {
      return res
        .status(400)
        .json({ message: 'story_image file is required' });
    }

    // build the stored path (adjust if you serve uploads differently)
    const imagePath = `/uploads/${file.filename}`;

    // create a single Story record
    const story = await Story.create({
      user_id: req.user.id,
      story_image: imagePath,
      swipe_text: swipe_text || null,
      views: 0
    });

    return res
      .status(201)
      .json({ message: 'Story added', story });
  } catch (err) {
    console.error('createStory error:', err);
    return res
      .status(500)
      .json({ message: 'Failed to add story', error: err.message });
  }
};


exports.getStories = async (req, res) => {
  try {
    const now = Date.now();

    // fetch all stories for that user
    const raw = await Story.findAll({
      order: [['created_at', 'ASC']],
      include: {
        model: User,
        as: 'story_user',
        include: { model: Profile, as: 'profile' }
      }
    });

    // filter out expired stories (> 24h old) and build payload
    const payload = raw
      .map(s => {
        const elapsedMinutes = Math.floor((now - new Date(s.created_at)) / 60000);
        const minutesLeft = 24 * 60 - elapsedMinutes;
        return {
          user_id: s.user_id,
          story_id: s.id,
          story_image: s.story_image,
          swipeText: s.swipe_text,
          views: s.views,
          minutesLeft: Math.max(0, minutesLeft),
          timestamp: s.created_at,
          user: s.story_user
        };
      })
      .filter(s => s.minutesLeft > 0);

    return res.json({ stories: payload });
  } catch (err) {
    console.error('getStoriesByUser error:', err);
    return res.status(500).json({ message: 'Failed to load stories', error: err.message });
  }
};

exports.getStoriesByUser = async (req, res) => {
  try {
    const userId = +req.params.userId;
    const now = Date.now();

    // fetch all stories for that user
    const raw = await Story.findAll({
      where: { user_id: userId },
      order: [['created_at', 'ASC']]
    });

    // filter out expired stories (> 24h old) and build payload
    const payload = raw
      .map(s => {
        const elapsedMinutes = Math.floor((now - new Date(s.created_at)) / 60000);
        const minutesLeft = 24 * 60 - elapsedMinutes;
        return {
          story_id: s.id,
          story_image: s.story_image,
          swipeText: s.swipe_text,
          views: s.views,
          minutesLeft: Math.max(0, minutesLeft),
          timestamp: s.created_at
        };
      })
      .filter(s => s.minutesLeft > 0);

    return res.json({ user_id: userId, stories: payload });
  } catch (err) {
    console.error('getStoriesByUser error:', err);
    return res.status(500).json({ message: 'Failed to load stories', error: err.message });
  }
};

// controllers/storyController.js
exports.deleteStory = async (req, res) => {
  try {
    const storyId = +req.params.id;
    const story = await Story.findByPk(storyId);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    if (story.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    await story.destroy();
    return res.json({ message: 'Story deleted' });
  } catch (err) {
    console.error('deleteStory error:', err);
    return res.status(500).json({ message: 'Could not delete story', error: err.message });
  }
};

exports.incrementView = async (req, res) => {
  const storyId = +req.params.id;
  await Story.increment('views', { where: { id: storyId } });
  res.json({ message: 'View recorded' });
};
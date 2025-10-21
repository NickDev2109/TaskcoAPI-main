// routes/story.js
const express = require('express');
const multer   = require('multer');
const path     = require('path');
const router  = express.Router();
const storyC  = require('../controllers/storyController');
const auth    = require('../middleware/auth');


// store uploads in ./uploads/, name them uniquely
const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.join(__dirname, '..', 'uploads')),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(
      null,
      `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`
    );
  }
});
const upload = multer({ storage });

router.post(
  '/',
  auth,
  upload.single('story_image'),
  storyC.createStory
);


router.get('/', auth, storyC.getStories);
router.get('/user/:userId', auth, storyC.getStoriesByUser);
router.delete('/:id',      auth, storyC.deleteStory);
router.post('/:id/view', auth, storyC.incrementView);

module.exports = router;
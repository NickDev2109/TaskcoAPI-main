// routes/feed.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/feedController');

const router = express.Router();

// store uploads in ./uploads/, name them uniquely
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '..', 'uploads')),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  }
});
const upload = multer({ storage });

// now our POST /feed/post can accept up to 5 files under field "media"
router.post(
  '/post',
  auth,
  upload.array('media', 5),
  ctrl.createPost
);

router.get('/', auth, ctrl.getFeed);
router.get('/:id', auth, ctrl.getUserPostById);
router.post('/:id/like', auth, ctrl.toggleLike);
router.post('/:id/comment', auth, ctrl.addComment);
router.delete('/:id', auth, ctrl.deletePost);

module.exports = router;

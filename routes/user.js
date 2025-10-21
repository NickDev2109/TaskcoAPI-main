const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');
const router = express.Router();
const { diskUpload } = require('../middleware/upload');

router.get('/me', auth, userController.getMyProfile);

router.patch(
    '/me',
    auth,
    diskUpload.fields([
      { name: 'profile_img', maxCount: 1 },
      { name: 'cover_img', maxCount: 1 }
    ]),
    userController.updateMyProfile
  );

router.get('/tasker/:id/profile', userController.getTaskerProfile);
router.get('/poster/:id/profile', userController.getPosterProfile);

router.get('/all', auth, userController.getUsers);

router.get('/:id', auth, userController.getUserById);

module.exports = router;

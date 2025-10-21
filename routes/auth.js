const express = require('express');
const { signup, login, verifyOtp, resendOtp, resetPassword, sendResetCode, googleSignIn} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);
router.post('/login', login);
router.post('/send-reset-code', sendResetCode);
router.post('/reset-password', resetPassword);
router.post('/google-signIn', googleSignIn);

module.exports = router;

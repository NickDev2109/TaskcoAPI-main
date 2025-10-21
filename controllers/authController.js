// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { Op } = require('sequelize');
const { User, Profile, Connection } = require('../models');
const { sendWelcomeEmail, sendResetEmail } = require('../utils/sendMail');
const { sendOtpSMS, sendPasswordResetSMS } = require('../utils/sendSMS');


exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({ message: "Missing request body" });
    }

    const { email, phone, password, role, fullName, home_lat, home_lng, skills } = req.body;

    const userExists = await User.findOne({
      where: {
        [Op.or]: [
          { email },
          { phone }
        ]
      }
    });

    if (userExists) {
      const field = userExists.email === email ? 'Email' : 'Phone number';
      return res.status(400).json({ message: `${field} already registered` });
    }

    const now = new Date();
    const hashedPassword = await bcrypt.hash(password, 10);
    const otpCode = generateOTP(6);

    // Create user
    const user = await User.create({
      email,
      phone,
      password: hashedPassword,
      role,
      otp_code: otpCode,
      otp_sent_at: now
    });

    // Create default profile for user
    await Profile.create({
      user_id: user.id,
      bio: '',
      fullName,
      home_lat: home_lat || 0.0,
      home_lng: home_lng || 0.0,
      service_radius: 0,
      rating: 0.0,
      status: 'active',
      approved_by_admin: false,
      ...(role === 'tasker' && { skills: JSON.stringify(skills) }) // 🛠 Save skills inside profile
    });


    // Send welcome email & OTP SMS
    await sendWelcomeEmail(email, email.split('@')[0]);
    await sendOtpSMS(phone, otpCode);

    res.status(201).json({ message: 'Signup successful, email sent ✅', user });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Something went wrong during signup.' });
  }
};

exports.verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone && !otp) {
    return res.status(400).json({ message: 'Phone and OTP are required' });
  }

  if (!otp) {
    return res.status(400).json({ message: 'OTP is required' });
  }

  const user = await User.findOne({ where: { phone } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.otp_code !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  // ✅ Mark as verified
  user.phone_verified = true;
  user.otp_code = null; // Optional: clear after use
  await user.save();

  // ✅ Generate JWT token after verification
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.status(200).json({
    message: 'Phone verified successfully!',
    token
  });
};


exports.resendOtp = async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  const user = await User.findOne({ where: { phone } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.phone_verified) {
    return res.status(400).json({ message: 'Phone number is already verified' });
  }

  const now = new Date();
  const lastSent = user.otp_sent_at;
  const twoMinutes = 2 * 60 * 1000; // in ms

  if (lastSent && now - new Date(lastSent) < twoMinutes) {
    const waitSec = Math.ceil((twoMinutes - (now - new Date(lastSent))) / 1000);
    return res.status(429).json({ message: `Please wait ${waitSec} seconds before resending OTP.` });
  }

  const newOTP = generateOTP(6);
  user.otp_code = newOTP;
  user.otp_sent_at = now;
  await user.save();

  await sendOtpSMS(phone, newOTP);

  res.status(200).json({ message: 'OTP resent successfully' });
};

exports.login = async (req, res) => {

  await sendWelcomeEmail('dotimi9117@bamsrad.com', 'John');

  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  const profile = await Profile.findOne({ where: { user_id: user.id } });

  if (!user) return res.status(400).json({ message: 'User not found' });

  const connections = await Connection.findAll({
    where: {
      [Op.and]: [{
        [Op.or]: [
          { sender_id: user.id },
          { receiver_id: user.id }
        ]
      }, { status: 'accepted' }]
    }
  })
  const connectionRequest = await Connection.findAll({
    where: {
      [Op.and]: [{
        [Op.or]: [
          { sender_id: user.id },
          { receiver_id: user.id }
        ]
      }, { status: 'pending' }]
    }
  })

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '48h' });

  res.json({ message: 'Login successful', token, id: user.id, role: user.role, is_verified: user.is_verified, phone_verified: user.phone_verified, kyc_verified: user.kyc_verified, phone: user.phone, email: user.email, profile, connectionRequest, connections });
};

exports.googleSignIn = async (req, res) => {
  const { email, socialToken, fullName, role } = req.body;
  console.log("Body: ", req.body);

  let user = await User.findOne({ where: { socialToken } });
  let profile;
  if (user) {
    profile = await Profile.findOne({ where: { user_id: user.id } });
  }

  if (!user) {
    // Create user
    user = await User.create({
      email,
      provider: 'google',
      role,
      socialToken,
      is_verified: true,
      email_verified: true,
      phone_verified: true
    });

    // Create default profile for user
    profile = await Profile.create({
      user_id: user.id,
      bio: '',
      fullName,
      home_lat: 0.0,
      home_lng: 0.0,
      service_radius: 0,
      rating: 0.0,
      status: 'active',
      approved_by_admin: false,
    });
    await sendWelcomeEmail(email, fullName);
  }

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '48h' });
  console.log({ message: 'Login successful', token, id: user.id, role: user.role, is_verified: user.is_verified, phone_verified: user.phone_verified, kyc_verified: user.kyc_verified, phone: user.phone, email: user.email, profile })
  res.json({ message: 'Login successful', token, id: user.id, role: user.role, is_verified: user.is_verified, phone_verified: user.phone_verified, kyc_verified: user.kyc_verified, phone: user.phone, email: user.email, profile });
};

exports.sendResetCode = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
  const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

  user.reset_code = code;
  user.reset_code_expires = expiry;
  await user.save();

  const user_name = user.email.split('@')[0];

  await sendResetEmail(user.email, user_name, code);
  await sendPasswordResetSMS(user.phone, code); // ✅ fixed

  res.status(200).json({ message: 'Reset code sent to email and phone.' });
};




exports.resetPassword = async (req, res) => {
  const { email, code, newPassword } = req.body;

  if (!email || !code || !newPassword) {
    return res.status(400).json({ message: 'Email, code, and new password are required' });
  }

  const user = await User.findOne({ where: { email } });
  if (!user || !user.reset_code || user.reset_code !== code) {
    return res.status(400).json({ message: 'Invalid reset code' });
  }

  if (new Date() > user.reset_code_expires) {
    return res.status(400).json({ message: 'Reset code expired' });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  user.reset_code = null;
  user.reset_code_expires = null;
  await user.save();

  res.status(200).json({ message: 'Password has been reset successfully!' });
};


function generateOTP(length = 6) {
  const chars = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += chars[Math.floor(Math.random() * chars.length)];
  }
  return otp;
}


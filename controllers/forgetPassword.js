const crypto = require('crypto');
const sendResetEmail = require('../utils/sendMail');

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const token = crypto.randomBytes(32).toString('hex');
  const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

  const user_name = user.email.split('@')[0]

  user.reset_token = token;
  user.reset_token_expires = expiry;
  await user.save();

  const resetLink = `${process.env.MY_APP_URL}reset-password?token=${token}`;

  await sendResetEmail(user.email, user_name ,resetLink);

  res.json({ message: 'Reset link sent to your email' });
};


exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
  
    if (!token || !newPassword) {
      return res.status(400).json({ message: 'Token and new password are required' });
    }
  
    const user = await User.findOne({
      where: {
        reset_token: token,
        reset_token_expires: { [Op.gt]: new Date() }
      }
    });
  
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
  
    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    user.reset_token = null;
    user.reset_token_expires = null;
    await user.save();
  
    res.json({ message: 'Password has been reset successfully!' });
  };
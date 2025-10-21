const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS
    }
})

  
const sendWelcomeEmail = async (to, name) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
      <img src="https://taskco-admin.onrender.com/logo.png" alt="Taskco Logo" style="width: 120px; margin-bottom: 20px;" />
      <h2 style="color: #333;">Welcome to Taskco, ${name}!</h2>
      <p>We're thrilled to have you join our community.</p>
      <p>You can now post or complete tasks, manage your profile, and explore endless opportunities.</p>
      <hr />
      <p style="font-size: 12px; color: #777;">If you didn’t sign up for Taskco, you can ignore this email.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Taskco" <${process.env.SMTP_EMAIL}>`,
      to,
      subject: '🎉 Welcome to Taskco!',
      html: htmlContent,
    });
  } catch (err) {
    console.error("Email failed to send:", err);
  }


};


const sendResetEmail = async (to, name, code) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
      <img src="https://taskco-admin.onrender.com/logo.png" alt="Taskco Logo" style="width: 120px; margin-bottom: 20px;" />
      <h2 style="color: #333;">Hi ${name}, Reset Your Taskco Password</h2>
      <p>Use the code below to reset your password. It expires in 15 minutes:</p>
      <h1 style="letter-spacing: 3px;">${code}</h1>
      <p>This code will expire in 15 minutes.</p>
      <p style="font-size: 12px; color: #777;">If you didn’t request a password reset, you can ignore this email.</p>
    </div>
  `;
  try {
    await transporter.sendMail({
      from: `"Taskco" <${process.env.SMTP_EMAIL}>`,
      to,
      subject: 'Reset Your Taskco Password!',
      html: htmlContent,
    });
  } catch (err) {
    console.error("Email failed to send:", err);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendResetEmail
};
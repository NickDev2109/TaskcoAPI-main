const twilio = require('twilio');

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendOtpSMS = async (to, otp) => {
  to = 18777804236;
  return client.messages.create({
    body: `Your OTP is ${otp} - Taskco Team`,
    from: process.env.TWILIO_FROM,
    to: to
  });
};


const sendPasswordResetSMS = async (to, otp) => {
  to = 18777804236;
  return client.messages.create({
    body: `Use the code below to reset your password. It expires in 15 minutes \n Your code is ${otp} - Taskco Team`,
    from: process.env.TWILIO_FROM,
    to: to
  });
};

module.exports = {sendOtpSMS, sendPasswordResetSMS };

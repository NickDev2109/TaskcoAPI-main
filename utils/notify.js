// utils/notify.js
const Notification = require('../models/Notification');

const notifyUser = async ({ user_id, type, message, task_id = null, sender_id = null, message_id = null }) => {
  try {
    await Notification.create({
      user_id,
      type,
      message,
      task_id,
      sender_id,
      message_id
    });
  } catch (err) {
    console.error('Notification Error:', err);
  }
};

module.exports = notifyUser;



// await notifyUser({
//     user_id: receiver_id,
//     type: 'message',
//     message: 'You have a new message',
//     message_id: newMessage.id,
//     sender_id: req.user.id
//   });

//   await notifyUser({
//     user_id: tasker_id,
//     type: 'task_update',
//     message: 'You’ve been assigned to a task!',
//     task_id: task.id
//   });
//     task_id: task.id
//   });
//     task_id: task.id
//   });
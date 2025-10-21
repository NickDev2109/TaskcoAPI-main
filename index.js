const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Op } = require('sequelize');
const { sequelize, Message, User, Profile, Connection } = require('./models');
const authRoutes = require('./routes/auth');
const kycRoutes = require('./routes/kyc');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const paymentRoutes = require('./routes/payment');
const taskMatchRoutes = require('./routes/taskMatch');
const notifRoutes = require('./routes/notifications');
const feedRoutes = require('./routes/feed');
const connectionRoutes = require('./routes/connections');
const path = require('path');
const storyRoutes = require('./routes/story');
const chatRoutes = require('./routes/chat');
const reviewRoutes = require('./routes/reviews');
const { Server } = require("socket.io");
const { diskUpload } = require('./middleware/upload');

const app = express();
const server = require("http").createServer(app);
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true })); // Optional: for form data

//sequelize.sync({ force: true })
sequelize.sync({ alter: true });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/kyc', kycRoutes);
app.use('/api/user', userRoutes);
app.use('/api/task', taskRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/tasks', taskMatchRoutes);
app.use('/api/notifications', notifRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/connections', connectionRoutes);

app.post('/upload', diskUpload.single('file'), (req, res) => {
  const fileUrl = `/uploads/${req.file.filename}`;
  console.log(req.file);
  
  res.json({ url: fileUrl });
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: false,
    transports: ["websocket", "polling"],
    allowEIO3: true,
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Get message history between two users
  socket.on("message:get", async ({ senderId, receiverId }) => {
    try {
      console.log({ senderId, receiverId });
      const messages = await Message.findAll({
        where: {
          [Op.or]: [
            { sender_id: senderId, receiver_id: receiverId },
            { sender_id: receiverId, receiver_id: senderId }
          ]
        },
        order: [['createdAt', 'ASC']],
      });

      socket.emit("response", {
        type: "chat:messages",
        payload: messages
      });
    } catch (err) {
      console.log("Socket Error: ", err);

      socket.emit("error", {
        type: "chat:error",
        message: err.message
      });
    }
  });

  // Send new message
  socket.on("message:send", async (data) => {
    try {
      const { content, senderId, receiverId, type, attachmentUrl } = data;
      console.log("Message Send: ", { content, senderId, receiverId, type, attachmentUrl });
      
      const newMessage = await Message.create({
        content,
        sender_id: senderId,
        receiver_id: receiverId,
        type,
        attachment_url: attachmentUrl
      });

      io.emit("response", {
        type: "chat:new",
        payload: newMessage
      });
    } catch (err) {
      socket.emit("error", {
        type: "chat:error",
        message: err.message
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});


server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});






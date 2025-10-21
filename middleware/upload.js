const multer = require('multer');
const path = require('path');
const fs = require('fs');

// 🔸 Memory storage for ID Analyzer
const memoryUpload = multer({ storage: multer.memoryStorage() });

// 🔸 Disk storage for profile and cover images
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/';
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const diskUpload = multer({ storage: diskStorage });

module.exports = {
  memoryUpload, // use for ID Analyzer routes
  diskUpload    // use for profile updates
};

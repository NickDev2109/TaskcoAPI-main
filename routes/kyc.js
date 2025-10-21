const express = require('express');
const { verifyID, getKycStatus } = require('../controllers/kycController');
const { memoryUpload } = require('../middleware/upload'); // ✅ Destructure here
const auth = require('../middleware/auth');

const router = express.Router();

router.post(
  '/verify-id',
  auth,
  memoryUpload.fields([
    { name: 'document', maxCount: 1 },
    { name: 'face', maxCount: 1 }
  ]),
  verifyID
);

router.get('/status', auth, getKycStatus);

module.exports = router;

const { postScan } = require('../utils/idAnalyzer');
const User = require('../models/User');


exports.verifyID = async (req, res) => {
  if (!req.files || !req.files.document || !req.files.face) {
    return res.status(400).json({ message: 'Both document and face image are required' });
  }

  try {
    const documentBase64 = req.files.document[0].buffer.toString('base64');
    const faceBase64 = req.files.face[0].buffer.toString('base64');
   

    const result = await postScan(documentBase64, faceBase64);

    if (result.error) {
      return res.status(400).json({ message: result.error.message || 'Verification failed' });
    }

    const address1 = result?.data?.address1;

    if (!address1 || address1.length === 0) {
      return res.status(400).json({ message: 'Verification failed. Error code #ADR001. Please contact to our support team.' });
    }

    const user = await User.findByPk(req.user.id);
    if (user) {
      user.kyc_verified = true;
      await user.save();
    }

    res.status(200).json({
      message: 'Document verified successfully',
      data: result
    });
  } catch (err) {
    console.error('ID Analyzer Error:', err?.response?.data || err.message);
    res.status(500).json({
      message: 'Error verifying ID',
      error: err?.response?.data || err.message
    });
  }
};



exports.getKycStatus = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['kyc_verified']
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ kyc_verified: user.kyc_verified });
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve KYC status', error: err.message });
  }
};

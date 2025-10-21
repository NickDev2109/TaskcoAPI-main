const KycDocument = require('../models/KycDocument');
const User = require('../models/User');

exports.getPendingKycs = async (req, res) => {
    const pending = await KycDocument.findAll({ where: { status: 'pending' } });
    res.json(pending);
};
  
exports.approveKyc = async (req, res) => {
    const kyc = await KycDocument.findByPk(req.params.id);
    if (!kyc) return res.status(404).json({ message: 'KYC not found' });

    kyc.status = 'approved';
    await kyc.save();

    const user = await User.findByPk(kyc.user_id);
    user.status = 'active';
    await user.save();

    res.json({ message: 'KYC approved and user activated' });
};
  
exports.rejectKyc = async (req, res) => {
    const kyc = await KycDocument.findByPk(req.params.id);
    if (!kyc) return res.status(404).json({ message: 'KYC not found' });
  
    kyc.status = 'rejected';
    await kyc.save();
  
    res.json({ message: 'KYC rejected' });
  };
  

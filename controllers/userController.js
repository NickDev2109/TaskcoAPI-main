const Profile = require('../models/Profile');
const User = require('../models/User');
const multer = require('multer');
const path = require('path');
const { Op } = require('sequelize');
const { Connection } = require('../models');

const storage = multer.memoryStorage();
const upload = multer({ storage });


exports.uploadProfileAssets = upload.fields([
  { name: 'profile_img', maxCount: 1 },
  { name: 'cover_img', maxCount: 1 }
]);


// GET /user/me
exports.getMyProfile = async (req, res) => {
  const user = req.user;
  const profile = await Profile.findOne({ where: { user_id: user.id } });
  const userdata = await User.findByPk(user.id);
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

  const resjson = {
    user: {
      id: userdata.user_id,
      email: userdata.email,
      phone: userdata.phone,
      role: userdata.role,
      is_verified: userdata.is_verified,
      phone_verified: userdata.phone_verified,
      kyc_verified: userdata.kyc_verified,
    },
    profile,
    connectionRequest,
    connections
  };

  res.json(resjson);
};


// PATCH /user/me
exports.updateMyProfile = async (req, res) => {
  const profile = await Profile.findOne({ where: { user_id: req.user.id } });
  if (!profile) return res.status(404).json({ message: 'Profile not found' });

  const allowedFields = [
    'fullName', 'bio', 'avatar_url', 'home_lat', 'home_lng',
    'service_radius', 'availability', 'skills', 'per_hour_rate'
  ];

  for (let field of allowedFields) {
    if (req.body[field] !== undefined) {
      profile[field] = req.body[field];
    }
  }

  if (req.files) {
    if (req.files['profile_img'] && req.files['profile_img'][0]) {
      const filename = req.files['profile_img'][0].filename;
      profile.profile_img_url = `/uploads/${filename}`;
    }

    if (req.files['cover_img'] && req.files['cover_img'][0]) {
      const filename = req.files['cover_img'][0].filename;
      profile.cover_img_url = `/uploads/${filename}`;
    }
  }

  await profile.save();
  res.json({ message: 'Profile updated', profile });
};



// GET /tasker/:id/profile
exports.getTaskerProfile = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user || user.role !== 'tasker') return res.status(404).json({ message: 'Tasker not found' });

  const profile = await Profile.findOne({ where: { user_id: user.id } });

  const resjson = {
    user: {
      id: user.user_id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      is_verified: user.is_verified,
      phone_verified: user.phone_verified,
      kyc_verified: user.kyc_verified,
    },
    profile
  };

  res.json(resjson);
};

// GET /poster/:id/profile
exports.getPosterProfile = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user || user.role !== 'poster') return res.status(404).json({ message: 'Poster not found' });

  const profile = await Profile.findOne({ where: { user_id: user.id } });

  const resjson = {
    user: {
      id: user.user_id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      is_verified: user.is_verified,
      phone_verified: user.phone_verified,
      kyc_verified: user.kyc_verified,
    },
    profile
  };

  res.json(resjson);
};



exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: { role: { [Op.in]: ['tasker', 'poster'] } },
      include: [{
        model: Profile,
        as: 'profile',
        attributes: [
          'fullName','bio','avatar_url','profile_img_url','cover_img_url',
          'rating','home_lat','home_lng','service_radius',
          'status','approved_by_admin','skills','availability','per_hour_rate'
        ]
      }]
    });

    // Remap and order fields
    const payload = users.map(u => {
      const p = u.profile || {};
      return {
        id:              u.id,
        email:           u.email,
        phone:           u.phone,
        role:            u.role,
        is_verified:     u.is_verified,
        email_verified:  u.email_verified,
        phone_verified:  u.phone_verified,
        kyc_verified:    u.kyc_verified,
        otp_code: u.otp_code,
        profile: {
          fullName:         p.fullName,
          bio:              p.bio,
          avatar_url:       p.avatar_url,
          profile_img_url:  p.profile_img_url,
          cover_img_url:    p.cover_img_url,
          rating:           p.rating,
          home_lat:         p.home_lat,
          home_lng:         p.home_lng,
          service_radius:   p.service_radius,
          status:           p.status,
          approved_by_admin:p.approved_by_admin,
          skills:           p.skills,
          availability:     p.availability,
          per_hour_rate:    p.per_hour_rate,
        }
      };
    });

    return res.json({ users: payload });
  } catch (err) {
    console.error('Error fetching users:', err);
    return res.status(500).json({ message: err.message });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    // only taskers & posters
    const user = await User.findOne({
      where: {
        id,
        role: { [Op.in]: ['tasker','poster'] }
      },
      include: [{
        model: Profile,
        as: 'profile',
        attributes: [
          'fullName','bio','avatar_url','profile_img_url','cover_img_url',
          'rating','home_lat','home_lng','service_radius',
          'status','approved_by_admin','skills','availability','per_hour_rate'
        ]
      }]
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // remap & order fields just like getUsers
    const p = user.profile || {};
    const payload = {
      id:              user.id,
      email:           user.email,
      phone:           user.phone,
      role:            user.role,
      is_verified:     user.is_verified,
      email_verified:  user.email_verified,
      phone_verified:  user.phone_verified,
      kyc_verified:    user.kyc_verified,
      otp_code: user.otp_code,
      profile: {
        fullName:         p.fullName,
        bio:              p.bio,
        avatar_url:       p.avatar_url,
        profile_img_url:  p.profile_img_url,
        cover_img_url:    p.cover_img_url,
        rating:           p.rating,
        home_lat:         p.home_lat,
        home_lng:         p.home_lng,
        service_radius:   p.service_radius,
        status:           p.status,
        approved_by_admin:p.approved_by_admin,
        skills:           p.skills,
        availability:     p.availability,
        per_hour_rate:    p.per_hour_rate,
      }
    };

    return res.json({ user: payload });
  } catch (err) {
    console.error('Error fetching user by id:', err);
    return res.status(500).json({ message: err.message });
  }
};
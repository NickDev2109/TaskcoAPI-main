const { Op, literal, fn, col } = require('sequelize');
const Profile = require('../models/Profile');
const User = require('../models/User');

// POST /tasks/match-taskers
exports.matchTaskers = async (req, res) => {
  const { lat, lng, category, radius = 10, min_rating = 3.0 } = req.body;

  try {
    const taskers = await Profile.findAll({
      include: [
        {
          model: User,
          where: { role: 'tasker' },
          attributes: ['id', 'email', 'role']
        }
      ],
      where: {
        category,
        //rating: { [Op.gte]: min_rating },
        //approved_by_admin: true,
        //status: 'active',
        //[Op.and]: literal(`ST_Distance_Sphere(point(${lng}, ${lat}), point(location_lng, location_lat)) <= ${radius * 1000}`)
      }
    });

    res.json({ taskers });
  } catch (err) {
    console.error('Match error:', err);
    res.status(500).json({ message: 'Matching failed' });
  }
};

// GET /taskers/discover
exports.discoverTaskers = async (req, res) => {
  const { category, radius, rating, lat, lng } = req.query;

  try {
    const whereClause = {
      //rating: { [Op.gte]: rating },
      //approved_by_admin: true,
      status: 'active',
      //[Op.and]: literal(`ST_Distance_Sphere(point(${lng}, ${lat}), point(location_lng, location_lat)) <= ${radius * 1000}`)
    };

    if (category) {
      whereClause.category = category;
    }

    const taskers = await Profile.findAll({
      include: [
        {
          model: User,
          where: { role: 'tasker' },
          attributes: ['id', 'email']
        }
      ],
      where: whereClause
    });

    res.json({ taskers });
  } catch (err) {
    console.error('Discover error:', err);
    res.status(500).json({ message: 'Discovery failed' });
  }
};

// GET /taskers/categories-near-me
exports.getNearbyCategories = async (req, res) => {
  const { lat, lng, radius = 10 } = req.query;

  try {
    const categories = await Profile.findAll({
      attributes: [[fn('DISTINCT', col('category')), 'category']],
      where: {
        approved_by_admin: true,
        status: 'active',
        [Op.and]: literal(`ST_Distance_Sphere(point(${lng}, ${lat}), point(location_lng, location_lat)) <= ${radius * 1000}`)
      }
    });

    res.json({ categories });
  } catch (err) {
    console.error('Category discovery error:', err);
    res.status(500).json({ message: 'Failed to fetch nearby services' });
  }
};
const { Post, Comment, Like } = require('../models');
const User      = require('../models/User');
const Profile      = require('../models/Profile');

// POST /feed/post
exports.createPost = async (req, res) => {
  const { content } = req.body;

  // multer has placed any uploaded files in req.files[]
  // turn them into public URLs (adjust your base URL as needed)
  const mediaUrls = (req.files || []).map(f => {
    return `/uploads/${f.filename}`;
  });

  const post = await Post.create({
    user_id:    req.user.id,
    content,
    media_urls: mediaUrls.length ? mediaUrls : null
  });

  res.status(201).json({ message: 'Post created', post });
};

// GET /feed
exports.getFeed = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['created_at', 'DESC']],
      include: [
        // 1) the author of the post
        {
          model: User,
          as: 'user',
          attributes: ['id','email','role'],
          include: [{
            model: Profile,
            as: 'profile',
            attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
          }]
        },
        // 2) comments + each comment’s user
        {
          model: Comment,
          as: 'Comments',
          attributes: ['id','content','created_at'],
          include: [{
            model: User,
            as: 'user',
            attributes: ['id','email','role'],
            include: [{
              model: Profile,
              as: 'profile',
              attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
            }]
          }]
        },
        // 3) likes + each like’s user
        {
          model: Like,
          as: 'Likes',
          attributes: ['id'],
          include: [{
            model: User,
            as: 'user',
            attributes: ['id','email','role'],
            include: [{
              model: Profile,
              as: 'profile',
              attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
            }]
          }]
        }
      ]
    });

    // reshape for cleaner output
    const payload = posts.map(post => ({
      id:         post.id,
      content:    post.content,
      media_urls: post.media_urls,
      created_at: post.created_at,

      // the post’s author
      user: {
        id:    post.user.id,
        email: post.user.email,
        role:  post.user.role,
        profile: post.user.profile
      },

      // comments
      Comments: post.Comments.map(c => ({
        id:         c.id,
        content:    c.content,
        created_at: c.created_at,
        user: {
          id:      c.user.id,
          email:   c.user.email,
          role:    c.user.role,
          profile: c.user.profile
        }
      })),

      // likes
      Likes: post.Likes.map(l => ({
        id:         l.id,
        created_at: l.created_at,
        user: {
          id:      l.user.id,
          email:   l.user.email,
          role:    l.user.role,
          profile: l.user.profile
        }
      }))
    }));

    return res.json(payload);
  } catch (err) {
    console.error('getFeed error:', err);
    return res.status(500).json({ message: 'Failed to load feed', error: err.message });
  }
};


exports.getFeed2 = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Comment,
          as: 'Comments',
          attributes: ['id','content','created_at'],
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id','email','role'],
              include: [
                {
                  model: Profile,
                  as: 'profile',
                  attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
                }
              ]
            }
          ]
        },
        {
          model: Like,
          as: 'Likes',
          attributes: ['id'],
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id','email','role'],
              include: [
                {
                  model: Profile,
                  as: 'profile',
                  attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
                }
              ]
            }
          ]
        }
      ]
    });

    // Optional: reshape before sending
    const payload = posts.map(post => ({
      id: post.id,
      user_id: post.user_id,
      content: post.content,
      media_urls: post.media_urls,
      created_at: post.created_at,
      Comments: post.Comments.map(c => ({
        id: c.id,
        content: c.content,
        created_at: c.created_at,
        user: {
          id: c.user.id,
          email: c.user.email,
          role: c.user.role,
          profile: c.user.profile
        }
      })),
      Likes: post.Likes.map(l => ({
        id: l.id,
        created_at: l.created_at,
        user: {
          id: l.user.id,
          email: l.user.email,
          role: l.user.role,
          profile: l.user.profile
        }
      }))
    }));

    return res.json(payload);
  } catch (err) {
    console.error('getFeed error:', err);
    return res.status(500).json({ message: 'Failed to load feed', error: err.message });
  }
};

// POST /feed/:id/like
exports.toggleLike = async (req, res) => {
  const post_id = req.params.id;
  const user_id = req.user.id;

  const existing = await Like.findOne({ where: { user_id, post_id } });

  if (existing) {
    await existing.destroy();
    res.json({ message: 'Post unliked' });
  } else {
    await Like.create({ user_id, post_id });
    res.json({ message: 'Post liked' });
  }
};

// POST /feed/:id/comment
exports.addComment = async (req, res) => {
  const post_id = req.params.id;
  const { content } = req.body;
  const comment = await Comment.create({
    user_id: req.user.id,
    post_id,
    content
  });
  res.status(201).json({ message: 'Comment added', comment });
};

// DELETE /feed/:id
exports.deletePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post || post.user_id !== req.user.id) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  await post.destroy();
  res.json({ message: 'Post deleted' });
};

exports.getUserPostById = async (req,res) => {
   try {
    const userId = req.params.id;
    const posts = await Post.findAll({
      order: [['created_at', 'DESC']],
      where: {
        user_id: userId
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id','email','role'],
          include: [{
            model: Profile,
            as: 'profile',
            attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
          }]
        },
        // 2) comments + each comment’s user
        {
          model: Comment,
          as: 'Comments',
          attributes: ['id','content','created_at'],
          include: [{
            model: User,
            as: 'user',
            attributes: ['id','email','role'],
            include: [{
              model: Profile,
              as: 'profile',
              attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
            }]
          }]
        },
        {
          model: Like,
          as: 'Likes',
          attributes: ['id'],
          include: [{
            model: User,
            as: 'user',
            attributes: ['id','email','role'],
            include: [{
              model: Profile,
              as: 'profile',
              attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
            }]
          }]
        }
      ]
    });

    // reshape for cleaner output
    const payload = posts.map(post => ({
      id:         post.id,
      content:    post.content,
      media_urls: post.media_urls,
      created_at: post.created_at,

      // the post’s author
      user: {
        id:    post.user.id,
        email: post.user.email,
        role:  post.user.role,
        profile: post.user.profile
      },

      // comments
      Comments: post.Comments.map(c => ({
        id:         c.id,
        content:    c.content,
        created_at: c.created_at,
        user: {
          id:      c.user.id,
          email:   c.user.email,
          role:    c.user.role,
          profile: c.user.profile
        }
      })),

      // likes
      Likes: post.Likes.map(l => ({
        id:         l.id,
        created_at: l.created_at,
        user: {
          id:      l.user.id,
          email:   l.user.email,
          role:    l.user.role,
          profile: l.user.profile
        }
      }))
    }));

    return res.json(payload);
  } catch (err) {
    console.error('getFeed error:', err);
    return res.status(500).json({ message: 'Failed to load feed', error: err.message });
  }
}
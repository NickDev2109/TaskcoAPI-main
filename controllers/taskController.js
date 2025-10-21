const Task = require('../models/Task');
const TaskApplication = require('../models/TaskApplication');
const User = require('../models/User');
const Profile = require('../models/Profile'); 
const Notification = require('../models/Notification');


const { Op } = require('sequelize');

// POST /tasks/public
exports.createPublicTask = async (req, res) => {
  const data = { ...req.body, poster_id: req.user.id };
  if (data.tasker_id) {
    data.status = 'hired';
  }
  const task = await Task.create(data);
  res.status(201).json({ message: 'Task posted publicly', task });
};

// GET /tasks/feed
exports.getTaskFeed = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: [
        {
          model: User,
          as: 'poster',
          include: { model: Profile, as: 'profile' }
        },
        {
          model: User,
          as: 'tasker',
          include: { model: Profile, as: 'profile' }
        }
      ]
    });

    res.json(tasks);
  } catch (err) {
    console.error('getTaskFeed error:', err);
    res.status(500).json({ message: 'Failed to load tasks', error: err.message });
  }
};

// GET /tasks/:id
exports.getTaskDetail = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

// POST /tasks/:id/apply
exports.applyToTask = async (req, res) => {
  try {
    const { cover_note } = req.body;
    const task_id        = req.params.id;
    const tasker_id      = req.user.id;

    // 1. Check task exists
    const task = await Task.findByPk(task_id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // 2. Prevent self-applications
    if (task.poster_id === tasker_id) {
      return res.status(403).json({ message: "You can't apply to your own task" });
    }

    // 3. Prevent duplicate
    const existing = await TaskApplication.findOne({ where: { task_id, tasker_id } });
    if (existing) {
      return res.status(400).json({ message: 'Already applied to this task' });
    }

    // 4. Create the application
    const application = await TaskApplication.create({ task_id, tasker_id, cover_note });

    // 5. Fetch the tasker’s profile so we get their name
    const applicant = await User.findByPk(tasker_id, {
      include: [{ model: Profile, attributes: ['fullName'] }]
    });
    const name = applicant?.Profile?.fullName || `User #${tasker_id}`;

    // 6. Notify the poster, using the real name
    await Notification.create({
      user_id:   task.poster_id,                // who should receive it
      type:      'application',                 // your notification type
      message:   `${name} applied to your task "${task.title}"`,
      task_id,                                  // link back to the task
      sender_id: tasker_id,                     // who caused the notification
    });

    // 7. Respond
    return res.status(201).json({
      message:     'Application submitted ✅',
      application
    });
  } catch (err) {
    console.error('Error applying to task:', err);
    return res.status(500).json({ message: 'Failed to apply to task' });
  }
};

// POST /tasks/direct-hire
exports.directHire = async (req, res) => {
  const data = { ...req.body, poster_id: req.user.id, status: 'hired' };
  const task = await Task.create(data);
  res.status(201).json({ message: 'Task directly hired', task });
};

// PATCH /tasks/:id/mark-complete
exports.markComplete = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task || task.tasker_id !== req.user.id) {
    return res.status(403).json({ message: 'Access denied' });
  }
  task.status = 'completed';
  await task.save();
  res.json({ message: 'Task marked as complete' });
};

// PATCH /tasks/:id/confirm-completion
exports.confirmCompletion = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task || task.poster_id !== req.user.id) {
    return res.status(403).json({ message: 'Access denied' });
  }
  task.status = 'paid';
  await task.save();
  res.json({ message: 'Payment confirmed, task marked as paid' });
};


// GET /tasker/tasks
exports.getTaskerTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { tasker_id: req.user.id },
      order: [['created_at','DESC']],
      include: [
        // always include the poster
        {
          model: User,
          as: 'poster',
          attributes: ['id','email','role'],
          include: [
            {
              model: Profile,
              as: 'profile',
              attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
            }
          ]
        },
        // optionally include the assigned tasker
        {
          model: User,
          as: 'tasker',
          required: false,   // still return tasks with tasker_id = null
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
    });

    return res.json(tasks);
  } catch (err) {
    console.error('getTaskerTasks error:', err);
    return res.status(500).json({
      message: 'Failed to load your tasks',
      error:   err.message
    });
  }
};


// GET /poster/tasks
exports.getPosterTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { poster_id: req.user.id },
      order: [['created_at','DESC']],
      include: [
        // always include the poster
        {
          model: User,
          as: 'poster',
          attributes: ['id','email','role'],
          include: [
            {
              model: Profile,
              as: 'profile',
              attributes: ['fullName','cover_img_url','profile_img_url','rating','status']
            }
          ]
        },
        // optionally include the assigned tasker
        {
          model: User,
          as: 'tasker',
          required: false,   // still return tasks with tasker_id = null
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
    });

    return res.json(tasks);
  } catch (err) {
    console.error('getPosterTasks error:', err);
    return res.status(500).json({
      message: 'Failed to load your posted tasks',
      error:   err.message
    });
  }
};


// GET /tasks/:id/applications
exports.getTaskApplications = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task || task.poster_id !== req.user.id) {
      return res.status(403).json({ message: 'Access denied or task not found' });
    }

    const applications = await TaskApplication.findAll({
      where: { task_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['id', 'email', 'role'],
          include: [
            {
              model: Profile,
              attributes: ['fullName', 'bio', 'avatar_url', 'rating','cover_img_url','profile_img_url'],
            }
          ]
        }
      ]
    });

    return res.json({ applications });
  } catch (err) {
    console.error('Error fetching applications:', err);
    return res.status(500).json({ message: 'Server error fetching applications' });
  }
};


// PATCH /tasks/:id/accept-tasker
exports.acceptTasker = async (req, res) => {
  const { tasker_id } = req.body;
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  // 1️⃣ assign & mark as hired
  task.tasker_id = tasker_id;
  task.status    = 'hired';
  await task.save();

  // 2️⃣ shortlist their application
  await TaskApplication.update(
    { status: 'shortlisted' },
    { where: { task_id: task.id, tasker_id } }
  );

  // 3️⃣ send notification to the selected tasker
  await Notification.create({
    user_id:   tasker_id,
    type:      'task_hired',
    message:   `Congratulations! You’ve been hired for "${task.title}".`,
    task_id:   task.id,
    sender_id: task.poster_id,  // the poster did the hiring
  });

  res.json({ message: 'Tasker assigned and shortlisted 👍', task });
};

// PATCH /applications/:id/reject
exports.rejectApplication = async (req, res) => {
  const application = await TaskApplication.findByPk(req.params.id);
  if (!application) return res.status(404).json({ message: 'Application not found' });

  // make sure this poster owns the task
  const task = await Task.findByPk(application.task_id);
  if (!task || task.poster_id !== req.user.id) {
    return res.status(403).json({ message: 'Access denied' });
  }

  // 1️⃣ mark as rejected
  application.status = 'rejected';
  await application.save();

  // 2️⃣ notify that tasker they were turned down
  await Notification.create({
    user_id:   application.tasker_id,
    type:      'application_rejected',
    message:   `Your application for "${task.title}" was not selected.`,
    task_id:   task.id,
    sender_id: req.user.id,  // the poster did the rejection
  });

  res.json({ message: 'Application rejected', application });
};


// GET /tasker/applications
exports.getMyApplications = async (req, res) => {
  const apps = await TaskApplication.findAll({
    where: { tasker_id: req.user.id },
  });

  res.json({ applications: apps });
};
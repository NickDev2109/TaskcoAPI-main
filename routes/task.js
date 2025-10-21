const express = require('express');
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/create', auth, taskController.createPublicTask);
router.get('/feed', auth, taskController.getTaskFeed);
router.get('/:id', auth, taskController.getTaskDetail);
router.post('/:id/apply', auth, taskController.applyToTask);
router.post('/direct-hire', auth, taskController.directHire);
router.patch('/:id/mark-complete', auth, taskController.markComplete);
router.patch('/:id/confirm-completion', auth, taskController.confirmCompletion);
router.get('/tasker/tasks', auth, taskController.getTaskerTasks);
router.get('/poster/tasks', auth, taskController.getPosterTasks);
router.get('/:id/applications', auth, taskController.getTaskApplications); // Poster
router.patch('/:id/accept-tasker', auth, taskController.acceptTasker);
router.patch('/applications/:id/reject', auth, taskController.rejectApplication); // Poster
router.get('/tasker/applicactions', auth, taskController.getMyApplications); // Tasker


module.exports = router;

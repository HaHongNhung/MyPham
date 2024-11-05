const NotificationController = require('../../controllers/notificationController');
const express = require('express');
const router = express.Router();

router.get('/', new NotificationController().getAllNotification);
router.get('/:id', new NotificationController().getOneNotification);
router.post('/', new NotificationController().createNotification);
router.put('/:id', new NotificationController().updateNotification);
router.delete('/:id', new NotificationController().deleteNotification);

module.exports = router;

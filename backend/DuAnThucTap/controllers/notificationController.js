const Notification = require('../models/Notification');

class NotificationController {
    createNotification = async (req, res) => {
        const { user_id, message, is_read } = req.body;

        if (!user_id || !message || !is_read) {
            return res.status(400).json({ message: 'user_id, message, and is_read are required.' });
        }

        const notification = new Notification({ user_id, message, is_read });

        try {
            await notification.save();
            res.redirect('/'); // Redirect về trang index
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    getAllNotification = async (req, res) => {
        try {
            const notifications = await Notification.find();
            res.json(notifications);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    updateNotification = async (req, res) => {
        const { user_id, message, is_read } = req.body;
        try {
            await Car.findByIdAndUpdate(req.params.id, { user_id, message, is_read });
            res.redirect('/');
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    deleteNotificatio = async (req, res) => {
        try {
            await Notification.findByIdAndDelete(req.params.id);
            res.redirect('/');
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

}

module.exports = NotificationController;
const Live_chat_detail = require('../models/live_chat_detail');

class Live_chat_detailController {
    createLive_chat_detail = async (req, res) => {
        const { live_chat_id, message, attachment } = req.body;
        const live_chat_detail = new Live_chat_detail({ live_chat_id, message, attachment });
    
        try {
            await live_chat_detail.save();
            res.status(201).json(live_chat_detail);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    getAllLive_chat_detail = async (req, res) => {
        try {
            const live_chat_details = await Live_chat_detail.find();
            res.json(live_chat_details);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getOneLive_chat_detail = async (req, res) => {
        try {
            const live_chat_detail = await Live_chat_detail.findById(req.params.id);
            if (!live_chat_detail) return res.status(404).json({ message: 'live_chat_detail not found' });
            res.json(live_chat_detail);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    updateLive_chat_detail = async (req, res) => {
        try {
            const live_chat_detail = await Live_chat_detail.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!live_chat_detail) return res.status(404).json({ message: 'live_chat_detail not found' });
            res.json(car);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    deleteLive_chat_detail = async (req, res) => {
        try {
            const live_chat_detail = await Live_chat_detail.findByIdAndDelete(req.params.id);
            if (!live_chat_detail) return res.status(404).json({ message: 'live_chat_detail not found' });
            res.json({ message: 'live_chat_detail deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = Live_chat_detailController;
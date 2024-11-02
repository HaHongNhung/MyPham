const Live_chat = require('../models/live_chat');

class Live_chatController {
    createLive_chat = async (req, res) => {
        const { sender_id, receiver_id} = req.body;
        const live_chat = new Live_chat({ sender_id, receiver_id});
    
        try {
            await live_chat.save();
            res.status(201).json(live_chat);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    getAllLive_chat = async (req, res) => {
        try {
            const live_chats = await Live_chat.find();
            res.json(live_chats);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getOneLive_chat = async (req, res) => {
        try {
            const live_chat = await Live_chat.findById(req.params.id);
            if (!live_chat) return res.status(404).json({ message: 'live_chat not found' });
            res.json(live_chat);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    updateLive_chat = async (req, res) => {
        try {
            const live_chat = await Live_chat.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!live_chat) return res.status(404).json({ message: 'live_chat not found' });
            res.json(car);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    deleteLive_chat = async (req, res) => {
        try {
            const live_chat = await Live_chat.findByIdAndDelete(req.params.id);
            if (!live_chat) return res.status(404).json({ message: 'live_chat not found' });
            res.json({ message: 'live_chat deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = Live_chatController;
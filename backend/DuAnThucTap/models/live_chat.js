const mongoose = require('mongoose');

const live_chatSchema = new mongoose.Schema({
    sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Live_chat = mongoose.model('Live_chat', live_chatSchema);
module.exports = Live_chat;

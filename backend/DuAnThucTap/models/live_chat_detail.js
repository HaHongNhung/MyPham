const mongoose = require('mongoose');

const live_chat_detailSchema = new mongoose.Schema({
    live_chat_id: { type: mongoose.Schema.Types.ObjectId, ref: 'live_chat', required: true },
    message: { type: String },
    attachment: { type: String },
}, { timestamps: true });

const Live_chat_detail = mongoose.model('Live_chat_detail', live_chat_detailSchema);
module.exports = Live_chat_detail;

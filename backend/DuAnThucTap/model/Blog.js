const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true },           // Tiêu đề
    content: { type: String, required: true },         // Nội dung
    author_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Liên kết đến bảng Users
}, {
    timestamps: true // Tự động thêm created_at và updated_at
});

module.exports = mongoose.model('Blog', blogSchema);

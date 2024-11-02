
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true, trim: true },       // Title of the blog
    content: { type: String, required: true },                 // Content of the blog
    author_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
}, {
    timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// Middleware to automatically update the `updatedAt` field on updates
blogSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Blog', blogSchema);

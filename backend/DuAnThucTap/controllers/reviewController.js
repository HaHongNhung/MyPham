const Review = require('../models/Review');

// Tạo mới review
exports.createReview = async (req, res) => {
    try {
        const { user_id, product_id, rating, review } = req.body;

        const newReview = new Review({ user_id, product_id, rating, review });
        await newReview.save();

        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy tất cả reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user_id').populate('product_id');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Review theo ID
exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('user_id').populate('product_id');
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Review
exports.updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa Review
exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

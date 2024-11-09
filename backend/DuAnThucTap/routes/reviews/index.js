    // routes/reviews.js
const express = require('express');
const router = express.Router();
const reviewController = require('../../controllers/reviewController');

// Lấy tất cả đánh giá của sản phẩm
router.get('/:productId', reviewController.getReviews);
    
// Thêm mới đánh giá
router.post('/', reviewController.createReview);

// Cập nhật đánh giá
router.put('/:id', reviewController.updateReview);

// Xóa đánh giá
router.delete('/:id', reviewController.deleteReview);

module.exports = router;

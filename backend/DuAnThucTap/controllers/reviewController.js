// controllers/reviewController.js
const reviewService = require('../service/ReviewService');

class ReviewController {
  // Lấy tất cả các đánh giá của sản phẩm
  async getReviews(req, res) {
    try {
      const reviews = await reviewService.getReviewsByProductId(req.params.productId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Thêm mới đánh giá
  async createReview(req, res) {
    try {
      const { user_id, product_id, rating, review } = req.body;
      const newReview = await reviewService.createReview({ user_id, product_id, rating, review });
      res.status(201).json(newReview);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Cập nhật đánh giá
  async updateReview(req, res) {
    try {
      const { rating, review } = req.body;
      const updatedReview = await reviewService.updateReview(req.params.id, { rating, review });
      res.json(updatedReview);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Xóa đánh giá
  async deleteReview(req, res) {
    try {
      const result = await reviewService.deleteReview(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new ReviewController();

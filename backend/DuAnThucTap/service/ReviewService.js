    // service/reviewService.js
const Review = require('../models/Review');
const Product = require('../models/Product');

class ReviewService {
  // Lấy tất cả các đánh giá của sản phẩm
  async getReviewsByProductId(productId) {
    try {
      const reviews = await Review.find({ product_id: productId })
        .populate('user_id', 'username')  // Lấy thông tin user liên quan
        .populate('product_id', 'name');  // Lấy thông tin product liên quan
      return reviews;
    } catch (error) {
      throw new Error('Error retrieving reviews: ' + error.message);
    }
  }

  // Tạo mới một đánh giá
  async createReview(data) {
    try {
      const { user_id, product_id, rating, review } = data;

      // Kiểm tra sản phẩm có tồn tại không
      const product = await Product.findById(product_id);
      if (!product) {
        throw new Error('Product not found');
      }
        
      const newReview = new Review({
        user_id,
        product_id,
        rating,
        review
      });

      await newReview.save();
      return newReview;
    } catch (error) {
      throw new Error('Error creating review: ' + error.message);
    }
  }

  // Cập nhật thông tin một đánh giá
  async updateReview(id, data) {
    try {
      const { rating, review } = data;

      const updatedReview = await Review.findByIdAndUpdate(
        id,
        { rating, review },
        { new: true }
      );

      if (!updatedReview) {
        throw new Error('Review not found');
      }

      return updatedReview;
    } catch (error) {
      throw new Error('Error updating review: ' + error.message);
    }
  }

  // Xóa một đánh giá
  async deleteReview(id) {
    try {
      const deletedReview = await Review.findByIdAndDelete(id);
      if (!deletedReview) {
        throw new Error('Review not found');
      }
      return { message: 'Review deleted successfully', deletedReview };
    } catch (error) {
      throw new Error('Error deleting review: ' + error.message);
    }
  }
}

module.exports = new ReviewService();

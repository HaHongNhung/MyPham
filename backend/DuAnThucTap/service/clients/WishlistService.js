// service/WishlistService.js
const Wishlist = require("../../models/Wishlist");

class WishlistService {
  // Thêm sản phẩm vào wishlist
  async addToWishlist(userId, productId) {
    // Kiểm tra nếu sản phẩm đã có trong wishlist
    const exists = await Wishlist.findOne({ user_id: userId, product_id: productId });
    if (exists) {
      throw new Error("Sản phẩm đã có trong wishlist");
    }

    const wishlistItem = new Wishlist({
      user_id: userId,
      product_id: productId,
    });

    await wishlistItem.save();
    return { message: "Sản phẩm đã được thêm vào wishlist" };
  }

  // Xóa sản phẩm khỏi wishlist
  async removeFromWishlist(userId, productId) {
    const result = await Wishlist.findOneAndDelete({ user_id: userId, product_id: productId });
    if (!result) {
      throw new Error("Sản phẩm không tồn tại trong wishlist");
    }
    return { message: "Sản phẩm đã được xóa khỏi wishlist" };
  }

  // Lấy danh sách wishlist của người dùng
  async getWishlist(userId) {
    const wishlist = await Wishlist.find({ user_id: userId }).populate("product_id");
    return wishlist;
  }
}

module.exports = new WishlistService();

// controllers/wishlistController.js
const WishlistService = require("../../service/clients/WishlistService");

class WishlistController {
  // Thêm vào wishlist
  addToWishlist = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id; // Giả sử bạn có middleware xác thực JWT và thêm user vào req

    try {
      const response = await WishlistService.addToWishlist(userId, productId);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Xóa khỏi wishlist
  removeFromWishlist = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;

    try {
      const response = await WishlistService.removeFromWishlist(userId, productId);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Lấy danh sách wishlist
  getWishlist = async (req, res) => {
    const userId = req.user.id;

    try {
      const wishlist = await WishlistService.getWishlist(userId);
      res.status(200).json(wishlist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

module.exports = new WishlistController();

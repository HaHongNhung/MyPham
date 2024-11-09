// controllers/authController.js
const User = require("../../models/User");
const AuthService = require("../../service/clients/AuthService"); // Import AuthService
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthController {
  // Đăng nhập
  login = async (req, res) => {
    const { username, password } = req.body;

    try {
      // Tìm người dùng theo username
      const user = await User.findOne({ username });
      if (!user)
        return res.status(400).json({ message: "Tên đăng nhập không đúng" });

      // So sánh mật khẩu
      const isMatch = await user.comparePassword(password);

      if (!isMatch)
        return res.status(400).json({ message: "Mật khẩu không đúng" });

      // Tạo JWT token nếu đăng nhập thành công
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ message: "Đăng nhập thành công", token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  // Đăng xuất
  logout = async (req, res) => {
    try {
      const result = await AuthService.logout();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  // Xử lý logic đăng ký
  register = async (req, res) => {
    try {
      const response = await AuthService.register(req.body);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Yêu cầu đặt lại mật khẩu
  requestPasswordReset = async (req, res) => {
    try {
      const { email } = req.body;
      const result = await AuthService.requestPasswordReset(email);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Đặt lại mật khẩu
  resetPassword = async (req, res) => {
    try {
      const { resetToken, newPassword } = req.body;
      const result = await AuthService.resetPassword(resetToken, newPassword);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}

module.exports = new AuthController();

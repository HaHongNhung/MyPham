// service/AuthService.js
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer"); // Để gửi email
const crypto = require("crypto"); // Để tạo token đặt lại mật khẩu ngẫu nhiên

class AuthService {
  // Xử lý logic đăng nhập
  async login(username, password) {
    // Kiểm tra xem username có tồn tại không
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
    }

    // Kiểm tra mật khẩu
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
    }

    // Kiểm tra xem tài khoản có đang hoạt động không
    if (!user.is_active) {
      throw new Error("Tài khoản của bạn đã bị khóa");
    }

    // Tạo JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { message: "Đăng nhập thành công", token };
  }

  async logout() {
   
    return { message: "Đăng xuất thành công" };
  }
  // Xử lý logic đăng ký
  async register(userData) {
    const { username, email, password, name, address, phone, role } = userData;

    // Kiểm tra nếu email hoặc username đã tồn tại
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      throw new Error("Email hoặc tên đăng nhập đã tồn tại");
    }

    // Tạo người dùng mới mà không cần mã hóa thủ công
    const newUser = new User({
      username,
      email,
      password, // Sử dụng mật khẩu thô, middleware sẽ tự động mã hóa
      role: role || "customer",
      is_active: true,
    });

    // Lưu người dùng vào cơ sở dữ liệu
    await newUser.save();

    // Tạo JWT token cho người dùng sau khi đăng ký
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { message: "Đăng ký thành công", token };
  }
  // Yêu cầu đặt lại mật khẩu
  async requestPasswordReset(email) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email không tồn tại trong hệ thống");
    }

    // Tạo một reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // Token hết hạn sau 1 giờ

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetTokenExpiry;
    await user.save();

    // Gửi token qua email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: "Password Reset",
      text:
        `Bạn nhận được email này vì đã yêu cầu đặt lại mật khẩu.\n\n` +
        `Vui lòng sử dụng token sau để đặt lại mật khẩu trong vòng một giờ:\n\n` +
        `${resetToken}\n\n` +
        `Nếu bạn không yêu cầu, hãy bỏ qua email này.\n`,
    };

    await transporter.sendMail(mailOptions);

    return {
      message:
        "Email xác nhận đã được gửi. Vui lòng kiểm tra email để đặt lại mật khẩu.",
    };
  }

  // Đặt lại mật khẩu
  async resetPassword(resetToken, newPassword) {
    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      throw new Error("Token không hợp lệ hoặc đã hết hạn");
    }

    // Cập nhật mật khẩu mới
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    return { message: "Mật khẩu của bạn đã được đặt lại thành công" };
  }
}

module.exports = new AuthService();

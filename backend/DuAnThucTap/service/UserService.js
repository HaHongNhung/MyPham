const users = require("../models/User");
const nodemailer = require('nodemailer');
const crypto = require('crypto');

class UserService {
  // Lấy danh sách tất cả người dùng
  async getAllUsers() {
    try {
      return await users.find();
    } catch (error) {
      throw new Error("Lỗi khi lấy danh sách người dùng");
    }
  }

  // Tạo người dùng mới
  async registerUser(userData) {
    const { username, email, password, name, address, phone, role } = userData;

    try {
      const existingUser = await users.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
        throw new Error("Email hoặc tên đăng nhập đã tồn tại");
      }

      const newUser = new users({
        username,
        email,
        password,
        role: role || "customer",
        is_active: true,
      });

      await newUser.save();
      return newUser;

    } catch (error) {
      console.error("Chi tiết lỗi:", error);
      throw new Error(error.message);
    }
  }

  // Yêu cầu đặt lại mật khẩu
  async requestPasswordReset(email) {
    try {
      const user = await users.findOne({ email });
      if (!user) {
        throw new Error("Email không tồn tại trong hệ thống");
      }

      // Tạo token đặt lại mật khẩu
      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetTokenExpiry = Date.now() + 3600000; // Token hết hạn sau 1 giờ

      // Lưu token và thời hạn vào cơ sở dữ liệu
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = resetTokenExpiry;
      await user.save();

      // URL đặt lại mật khẩu
      const resetUrl = `http://localhost:3000/reset-password?token=${resetToken}`;

      // Cấu hình transporter để gửi email
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
          `Vui lòng nhấp vào liên kết sau để đặt lại mật khẩu trong vòng một giờ:\n\n` +
          `${resetUrl}\n\n` +
          `Nếu bạn không yêu cầu, hãy bỏ qua email này.\n`,
      };

      await transporter.sendMail(mailOptions);

      return { message: "Email xác nhận đã được gửi. Vui lòng kiểm tra email để đặt lại mật khẩu." };
    } catch (error) {
      console.error("Lỗi khi gửi email đặt lại mật khẩu:", error);
      throw new Error("Không thể gửi email đặt lại mật khẩu");
    }
  }

  // Đặt lại mật khẩu
  async resetPassword(resetToken, newPassword) {
    try {
      const user = await users.findOne({
        resetPasswordToken: resetToken,
        resetPasswordExpires: { $gt: Date.now() },
      });

      if (!user) {
        throw new Error("Token không hợp lệ hoặc đã hết hạn");
      }

      // Cập nhật mật khẩu mới và xóa token đặt lại
      user.password = newPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();

      return { message: "Mật khẩu của bạn đã được đặt lại thành công" };
    } catch (error) {
      console.error("Lỗi khi đặt lại mật khẩu:", error);
      throw new Error("Không thể đặt lại mật khẩu");
    }
  }

  // Cập nhật thông tin người dùng
  async updateUser(userId, updateData) {
    try {
      const user = await users.findById(userId);
      if (!user) {
        throw new Error("Người dùng không tồn tại");
      }

      if (updateData.password) {
        user.password = updateData.password;
      }

      Object.assign(user, updateData);
      await user.save();
      return user;
    } catch (error) {
      throw new Error("Lỗi khi cập nhật thông tin người dùng");
    }
  }

  // Xóa người dùng
  async deleteUser(userId) {
    try {
      const user = await users.findByIdAndDelete(userId);
      if (!user) {
        throw new Error("Người dùng không tồn tại");
      }
      return user;
    } catch (error) {
      throw new Error("Lỗi khi xóa người dùng");
    }
  }
}

module.exports = new UserService();

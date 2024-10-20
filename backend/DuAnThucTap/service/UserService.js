const bcrypt = require("bcrypt");
const users = require("../model/User");

class UserService {
  // Lấy danh sách tất cả người dùng
  async getAllUsers() {
    try {
      return await users.find();
    } catch (error) {
      throw new Error("Lỗi khi lấy danh sách người dùng");
    }
  }
  // Tìm người dùng theo ID
  async getUserById(userId) {
    try {
      console.log("Searching for user with ID:", userId); // Thêm dòng này để kiểm tra
      const user = await users.findById(userId);
      if (!user) {
        throw new Error("Người dùng không tồn tại");
      }
      return user;
    } catch (error) {
      console.error("Error finding user:", error);
      throw new Error("Không tìm thấy người dùng");
    }
  }

  // Tạo người dùng mới
  async registerUser(userData) {
    const { username, email, password, name, address, phone, role } = userData;

    try {
      // Kiểm tra nếu email đã tồn tại
      const existingUser = await users.findOne({ email });
      if (existingUser) {
        throw new Error("Email đã tồn tại");
      }

      // Mã hóa mật khẩu
      const hashedPassword = await bcrypt.hash(password, 10);

      // Tạo người dùng mới
      const newUser = new users({
        username,
        email,
        password: hashedPassword,
        name,
        address,
        phone,
        role: role || "customer",
        is_active: true,
      });

      // Lưu vào cơ sở dữ liệu
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error("Lỗi khi tạo tài khoản");
    }
  }

// Cập nhật thông tin người dùng
async updateUser(userId, updateData) {
    try {
        const user = await users.findById(userId);
        if (!user) {
            throw new Error("Người dùng không tồn tại");
        }

        // Kiểm tra nếu mật khẩu có trong updateData
        if (updateData.password) {
            // Mã hóa mật khẩu mới
            const hashedPassword = await bcrypt.hash(updateData.password, 10);
            updateData.password = hashedPassword; // Thay thế mật khẩu bằng mật khẩu đã mã hóa
        }

        // Cập nhật thông tin người dùng
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

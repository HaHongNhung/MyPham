

const UserService = require('../../service/UserService');

class UsersController {

    // Lấy danh sách tất cả người dùng
    getAllUsers = async (req, res) => {
        try {
            const data = await UserService.getAllUsers();
            res.json({ data });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Đăng ký người dùng mới
    registerUser = async (req, res) => {
        try {
            const newUser = await UserService.registerUser(req.body);
            res.status(201).json({ message: 'Tạo tài khoản thành công', user: newUser });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Lấy thông tin người dùng theo ID
    getUserById = async (req, res) => {
        try {
            
            const user = await UserService.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }
            res.json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Cập nhật thông tin người dùng
    updateUser = async (req, res) => {
        try {
            const updatedUser = await UserService.updateUser(req.params.id, req.body);
            res.json({ message: 'Cập nhật thông tin thành công', user: updatedUser });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Xóa người dùng
    deleteUser = async (req, res) => {
        try {
            const deletedUser = await UserService.deleteUser(req.params.id);
            res.json({ message: 'Xóa người dùng thành công', user: deletedUser });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UsersController;

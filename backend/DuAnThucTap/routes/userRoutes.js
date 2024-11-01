// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/Admin/UserController');
const userController = new UserController();

// Route lấy tất cả người dùng
router.get('/users', userController.getAllUsers);

// Route đăng ký người dùng mới
router.post('/register', userController.registerUser);

// Route lấy thông tin người dùng theo ID
router.get('/users/:id', userController.getUserById);

// Route cập nhật thông tin người dùng
router.put('/users/:id', userController.updateUser);

// Route xóa người dùng
router.delete('/users/:id', userController.deleteUser);

module.exports = router;


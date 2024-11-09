// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const UsersController = require('../../controllers/Admin/UserController');
const usersController = new UsersController();

// Route lấy tất cả người dùng
router.get('/', usersController.getAllUsers);

// Route đăng ký người dùng mới
router.post('/create', usersController.registerUser);

// Route lấy thông tin người dùng theo ID
router.get('/:id', usersController.getUserById);

// Route cập nhật thông tin người dùng
router.put('/:id', usersController.updateUser);

// Route xóa người dùng
router.delete('/:id', usersController.deleteUser);

module.exports = router;


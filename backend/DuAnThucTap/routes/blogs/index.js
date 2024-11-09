// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const BlogController = require('../../controllers/Admin/BlogController');
const blogController = new BlogController();

// Route lấy tất cả người dùng
router.get('/', blogController.getAllBlogs);

// Route đăng ký người dùng mới
router.post('/create', blogController.createBlog);

// Route lấy thông tin người dùng theo ID
router.get('/:id', blogController.getBlogById);

// Route cập nhật thông tin người dùng
router.put('/:id', blogController.updateBlog);

// Route xóa người dùng
router.delete('/:id', blogController.deleteBlog);

module.exports = router;


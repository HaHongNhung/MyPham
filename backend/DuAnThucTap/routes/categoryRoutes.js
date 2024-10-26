const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// POST: Tạo mới category
router.post('/', categoryController.createCategory);

// GET: Lấy tất cả categories
router.get('/', categoryController.getAllCategories);

// Lấy Category theo ID
router.get('/:id', categoryController.getCategoryById);

// Cập nhật Category
router.put('/:id', categoryController.updateCategory);

// Xóa Category
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;

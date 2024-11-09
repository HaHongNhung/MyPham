const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/categoryController');

router.get('/', categoryController.getAllCategories); // Lấy tất cả categories
router.get('/:id', categoryController.getCategoryById); // Lấy category theo ID
router.post('/', categoryController.createCategory); // Tạo mới category
router.put('/:id', categoryController.updateCategory); // Cập nhật category
router.delete('/:id', categoryController.deleteCategory); // Xóa category

module.exports = router;

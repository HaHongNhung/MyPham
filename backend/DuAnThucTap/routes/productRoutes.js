const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// POST: Tạo mới sản phẩm
router.post('/', productController.createProduct);

// GET: Lấy tất cả sản phẩm
router.get('/', productController.getAllProducts);

// GET: Lấy sản phẩm theo ID
router.get('/:id', productController.getProductById);

// PUT: Cập nhật sản phẩm
router.put('/:id', productController.updateProduct);

// DELETE: Xóa sản phẩm
router.delete('/:id', productController.deleteProduct);

module.exports = router;

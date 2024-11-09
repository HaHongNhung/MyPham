// routes/brands.js
const express = require('express');
const router = express.Router();
const brandController = require('../../controllers/brandController');


// Các route cho CRUD Brand
router.get('/', brandController.getAllBrands);  // Lấy danh sách tất cả các brand
router.get('/:id', brandController.getBrandById); // Lấy brand theo ID
router.post('/', brandController.createBrand); // Tạo mới brand
router.put('/:id', brandController.updateBrand); // Cập nhật brand theo ID
router.delete('/:id', brandController.deleteBrand); // Xóa brand theo ID

module.exports = router;

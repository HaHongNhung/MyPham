// controllers/brandController.js
const brandService = require('../service/BrandService');

class BrandController {
    // Lấy tất cả các brand
    async getAllBrands(req, res) {
        try {
            const brands = await brandService.getAllBrands();
            res.json(brands);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Lấy thông tin brand theo ID
    async getBrandById(req, res) {
        try {
            const brand = await brandService.getBrandById(req.params.id);
            res.json(brand);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Tạo mới một brand
    async createBrand(req, res) {
        try {
            const { name, description } = req.body;
            const brand = await brandService.createBrand({ name, description });
            res.status(201).json(brand);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Cập nhật thông tin brand
    async updateBrand(req, res) {
        try {
            const { name, description } = req.body;
            const brand = await brandService.updateBrand(req.params.id, { name, description });
            res.json(brand);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Xóa một brand
    async deleteBrand(req, res) {
        try {
            const result = await brandService.deleteBrand(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new BrandController();

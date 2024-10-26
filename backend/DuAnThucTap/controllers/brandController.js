const Brand = require('../models/Brand'); // Đảm bảo đường dẫn đúng

// Tạo mới brand
exports.createBrand = async (req, res) => {
    try {
        const { name, description } = req.body; // Giả sử bạn có hai trường này

        const newBrand = new Brand({ name, description });
        await newBrand.save();

        res.status(201).json(newBrand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy tất cả brands
exports.getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Brand theo ID
exports.getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Brand
exports.updateBrand = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!brand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json(brand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa Brand
exports.deleteBrand = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id);
        if (!brand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json({ message: 'Brand deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

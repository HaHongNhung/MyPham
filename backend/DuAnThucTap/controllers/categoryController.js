// controllers/categoryController.js
const CategoryService = require('../service/CategoryService');

class CategoryController {
    // Lấy tất cả các category
    async getAllCategories(req, res) {
        try {
            const categories = await CategoryService.getAllCategories();
            res.status(200).json(categories); // Trả về danh sách category
        } catch (error) {
            res.status(500).json({ error: "Lỗi khi lấy danh sách category: " + error.message });
        }
    }

    // Lấy một category theo ID
    async getCategoryById(req, res) {
        const { id } = req.params;
        try {
            const category = await CategoryService.getCategoryById(id);
            res.status(200).json(category); // Trả về category tìm được
        } catch (error) {
            res.status(404).json({ error: "Không tìm thấy category với ID " + id });
        }
    }

    // Tạo mới một category
    async createCategory(req, res) {
        try {
            const category = await CategoryService.createCategory(req.body);
            res.status(201).json({ message: "Category được tạo thành công", category });
        } catch (error) {
            res.status(400).json({ error: "Lỗi khi tạo category: " + error.message });
        }
    }

    // Cập nhật một category
    async updateCategory(req, res) {
        const { id } = req.params;
        try {
            const updatedCategory = await CategoryService.updateCategory(id, req.body);
            res.status(200).json({ message: "Category được cập nhật thành công", updatedCategory });
        } catch (error) {
            res.status(400).json({ error: "Lỗi khi cập nhật category: " + error.message });
        }
    }

    // Xóa một category
    async deleteCategory(req, res) {
        const { id } = req.params;
        try {
            const deletedCategory = await CategoryService.deleteCategory(id);
            res.status(200).json({
                message: "Category đã bị xóa thành công",
                category: deletedCategory,
            });
        } catch (error) {
            res.status(404).json({ error: "Không tìm thấy category để xóa với ID " + id });
        }
    }
}

module.exports = new CategoryController();
    
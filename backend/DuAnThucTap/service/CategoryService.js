// service/CategoryService.js
const Category = require('../models/Category');

class CategoryService {
    // Lấy tất cả các category
    async getAllCategories() {
        try {
            return await Category.find();
        } catch (error) {
            throw new Error("Error retrieving category list");
        }
    }

    // Lấy một category theo ID
    async getCategoryById(categoryId) {
        try {
            const category = await Category.findById(categoryId);
            if (!category) throw new Error("Category does not exist");
            return category;
        } catch (error) {
            throw new Error("Error retrieving category");
        }
    }

    // Tạo mới một category
    async createCategory(categoryData) {
        try {
            const newCategory = new Category(categoryData);
            await newCategory.save();
            return newCategory;
        } catch (error) {
            throw new Error("Error creating category");
        }
    }

    // Cập nhật một category
    async updateCategory(categoryId, updateData) {
        try {
            const category = await Category.findById(categoryId);
            if (!category) throw new Error("Category does not exist");

            Object.assign(category, updateData);
            await category.save();
            return category;
        } catch (error) {
            throw new Error("Error updating category");
        }
    }

    // Xóa một category
    async deleteCategory(categoryId) {
        try {
            const category = await Category.findByIdAndDelete(categoryId);
            if (!category) throw new Error("Category does not exist");
            return category;
        } catch (error) {
            throw new Error("Error deleting category");
        }
    }
}

module.exports = new CategoryService();

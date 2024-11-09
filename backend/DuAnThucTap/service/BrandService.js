// service/brandService.js
const Brand = require('../models/Brand');

class BrandService {
    // Lấy tất cả các brand
    async getAllBrands() {
        try {
            const brands = await Brand.find().lean();  // .lean() để tối ưu
            return brands;
        } catch (error) {
            throw new Error('Error retrieving brands: ' + error.message);
        }
    }

    // Lấy thông tin brand theo ID
    async getBrandById(id) {
        try {
            const brand = await Brand.findById(id).lean();  // .lean() để tối ưu
            if (!brand) {
                throw new Error('Brand not found');
            }
            return brand;
        } catch (error) {
            throw new Error('Error retrieving brand: ' + error.message);
        }
    }

    // Tạo mới một brand
    async createBrand(data) {
        try {
            const { name, description } = data;

            // Kiểm tra đầu vào (validation)
            if (!name || name.trim() === "") {
                throw new Error('Brand name is required');
            }

            const brand = new Brand({ name, description });
            await brand.save();
            return brand;
        } catch (error) {
            throw new Error('Error creating brand: ' + error.message);
        }
    }

    // Cập nhật thông tin brand
    async updateBrand(id, data) {
        try {
            const { name, description } = data;

            // Kiểm tra đầu vào
            if (!name || name.trim() === "") {
                throw new Error('Brand name is required');
            }

            const brand = await Brand.findByIdAndUpdate(
                id,
                { name, description },
                { new: true }
            );

            if (!brand) {
                throw new Error('Brand not found');
            }
            return brand;
        } catch (error) {
            throw new Error('Error updating brand: ' + error.message);
        }
    }

    // Xóa một brand
    async deleteBrand(id) {
        try {
            const brand = await Brand.findByIdAndDelete(id);
            if (!brand) {
                throw new Error('Brand not found');
            }
            return { message: 'Brand deleted successfully', brand };
        } catch (error) {
            throw new Error('Error deleting brand: ' + error.message);
        }
    }
}

module.exports = new BrandService();

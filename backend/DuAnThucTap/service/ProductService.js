// service/productService.js
const Product = require('../models/Product');

class ProductService {
    // Lấy tất cả sản phẩm
    async getAllProducts() {
        try {
            const products = await Product.find().populate('category_id brand_id'); // Thêm thông tin Category và Brand
            return products;
        } catch (error) {
            throw new Error('Error retrieving products: ' + error.message);
        }
    }

    // Lấy sản phẩm theo ID
    async getProductById(id) {
        try {
            const product = await Product.findById(id).populate('category_id brand_id');
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (error) {
            throw new Error('Error retrieving product: ' + error.message);
        }
    }

    // Tạo mới sản phẩm
    async createProduct(data) {
        try {
            const { name, description, price, stock, category_id, brand_id, image } = data;
            const product = new Product({ name, description, price, stock, category_id, brand_id, image });
            await product.save();
            return product;
        } catch (error) {
            throw new Error('Error creating product: ' + error.message);
        }
    }

    // Cập nhật sản phẩm
    async updateProduct(id, data) {
        try {
            const { name, description, price, stock, category_id, brand_id, image } = data;
            const product = await Product.findByIdAndUpdate(
                id,
                { name, description, price, stock, category_id, brand_id, image },
                { new: true }
            );
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (error) {
            throw new Error('Error updating product: ' + error.message);
        }
    }

    // Xóa sản phẩm
    async deleteProduct(id) {
        try {
            const product = await Product.findByIdAndDelete(id);
            if (!product) {
                throw new Error('Product not found');
            }
            return { message: 'Product deleted successfully', product };
        } catch (error) {
            throw new Error('Error deleting product: ' + error.message);
        }
    }
}

module.exports = new ProductService();

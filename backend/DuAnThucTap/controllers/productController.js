// controllers/productController.js
const productService = require('../service/ProductService');

class ProductController {
    // Lấy tất cả sản phẩm
    async getAllProducts(req, res) {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Lấy sản phẩm theo ID
    async getProductById(req, res) {
        try {
            const product = await productService.getProductById(req.params.id);
            res.json(product);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Tạo mới một sản phẩm
    async createProduct(req, res) {
        try {
            const { name, description, price, stock, category_id, brand_id, image } = req.body;
            const product = await productService.createProduct({ name, description, price, stock, category_id, brand_id, image });
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Cập nhật sản phẩm
    async updateProduct(req, res) {
        try {
            const { name, description, price, stock, category_id, brand_id, image } = req.body;
            const product = await productService.updateProduct(req.params.id, { name, description, price, stock, category_id, brand_id, image });
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Xóa sản phẩm
    async deleteProduct(req, res) {
        try {
            const result = await productService.deleteProduct(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new ProductController();

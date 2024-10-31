
const Product = require('../models/Product');

// Tạo mới sản phẩm
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category_id, brand_id, image } = req.body;
        const newProduct = new Product({ name, description, price, stock, category_id, brand_id, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category_id brand_id');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy sản phẩm theo ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category_id brand_id');
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật sản phẩm
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa sản phẩm
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const products = require("../model/products");
const ProductService = require("../service/ProductService");

class ProductsController {
    getAllProducts = async (req, res) => {
        try {
            const data = await products.find().populate();
            // console.log('data: ', data);
            res.json({

                data: data
            })
        } catch (error) {
            console.log(error);
        }
    }
    AddProducts = async (req, res) => {
        try {
            const name = req.body.name;
            const description = req.body.description;
            const price = req.body.price;
            const quantity = req.body.quantity;
            const data = await new ProductService().addProducts(name);
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
}

module.exports = ProductsController;

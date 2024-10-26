const products = require('../../model/products');
const ProductsController = require('../../controllers/productController');
const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

router.get('/get-products', new ProductsController().getAllProducts);
router.use('/add-newproducts', new ProductsController().AddProducts);

module.exports = router;

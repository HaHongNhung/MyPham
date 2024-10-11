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

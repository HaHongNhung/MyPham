const cart = require("../models/cart");
// const product = require("../models/product");
class CartsController {
    getCart = async (req, res) => {
        try {
            const {user_id} = req.body;
            console.log(user_id)
            // Find cart items for the user and populate product and user details
            const cartItems = await cart.find({ user_id:user_id }) 
                // .populate('product_id') // Populate product details
                // .populate('user_id'); // Populate user details if necessary
            const data = cartItems.map(item => ({
                product: item.product_id, // This will include product details
                quantity: item.quantity,
                user: item.user_id // Include user details if necessary
                // Add total_price if you want to calculate it dynamically, e.g., quantity * item.product_id.price
            }));
            res.json({
                data
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'An error occurred while fetching cart items' });
        }
    };
    // them
    AddCart = async (req, res) => {
        try {
            const carts = req.body;
            console.log(carts)
            const user_id = carts.user_id
            const product_id = carts.product_id
            const quantity = carts.quantity

            const ObjectOrder = new cart({
                user_id,
                product_id,
                quantity
            })
            const result = await ObjectOrder.save()
            res.json({
                data: result
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
    //    xoa
    DeleteCart = async (req, res) => {
        try {
            const { id } = req.params
            const carts = await cart.findByIdAndDelete(id)
            res.json({
                data: carts
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
}
module.exports = CartsController;

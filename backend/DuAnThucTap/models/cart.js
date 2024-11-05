const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carts = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }, // Reference to Users
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true }, // Reference to Product Variants
    quantity: { type: Number, required: true }, // 
    // total_price: { type: Number, required: true } // 
});

module.exports = mongoose.model('cart', carts);

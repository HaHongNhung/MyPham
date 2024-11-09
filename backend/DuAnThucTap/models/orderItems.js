const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItems = new Schema({
  order_id: {
    type: Schema.Types.ObjectId,
    ref: "order",
    required: true,
  }, // Reference to Orders
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  }, // Reference to Products
  quantity: { type: Number, required: true }, // Quantity of the product
  unit_price: { type: Number, required: true }, // Unit price of the product
});

module.exports = mongoose.model("orderItem", orderItems);

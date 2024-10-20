
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  brand_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const products = new Scheme({
    // image: { type: String },
    name: { type: String, required: false },
    price: { type: Number, required: false },
    description: { type: String, required: false },
    quantity: { type: Number, required: false },
    status: { type: Boolean, required: false ,default : true }
}, {
    timestamps: true
}
)
module.exports = mongoose.model('Product', products)
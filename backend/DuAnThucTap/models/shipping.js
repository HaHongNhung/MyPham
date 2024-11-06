const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippings = new Schema({
    order_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Order', 
        required: true 
    },
    shipping_method: { 
        type: String, 
        enum: ['Standard', 'Express', 'Same-day'], 
        required: true 
    },
    shipping_status: { 
        type: String, 
        enum: ['Pending', 'Shipped', 'Delivered'], 
        required: true 
    },
    tracking_number: { 
        type: String, 
        unique: true 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('shippings', shippings);

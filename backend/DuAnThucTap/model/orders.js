const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orders = new Schema({
    user_id : {
        type: Schema.Types.ObjectId,
        ref: 'user', 
        required: true 
    },
    order_status: { 
        type: String, 
        enum: ['đã đặt', 'đang giao', 'hoàn thành'], 
        required: true 
      }, // Order status
      payment_method: { 
        type: String, 
        enum: ['ZaloPay', 'MoMo', 'Paypal'], 
        required: true 
      }, // Payment method
      total_price: { type: Number, required: true }, // Total order price
}, {
    timestamps: true
}
)
module.exports = mongoose.model('order', orders)
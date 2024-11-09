const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payments = new Schema({
    payment_method: {
        type: String,
        enum: ['Credit Card', 'Bank Transfer', 'PayPal', 'Cash'],
        required: true
    },
    order_id: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    transaction_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('payments', payments);

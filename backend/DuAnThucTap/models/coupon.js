const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coupons = new Schema({
    code: { 
        type: String, 
        required: true, 
        unique: true 
    },
    discount_percentage: { 
        type: Number, 
        required: true 
    },
    start_date: { 
        type: Date, 
        required: true 
    },
    end_date: { 
        type: Date, 
        required: true 
    },
    is_active: { 
        type: Boolean, 
        default: true 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('coupons', coupons);

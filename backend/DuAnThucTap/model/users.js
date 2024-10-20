const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const users = new Scheme({
    // image: { type: String },
    name: { type: String, required: false },
    address: { type: String, required: false },
    phone: { type: Number, required: false }
}, {
    timestamps: true
}
)
module.exports = mongoose.model('user', users)
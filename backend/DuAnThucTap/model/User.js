const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },  // Tên đăng nhập
    email: { type: String, required: true, unique: true },     // Email, phải là duy nhất
    password: { type: String, required: true },                // Mật khẩu, sẽ được mã hóa
    role: { type: String, enum: ['admin', 'customer'], default: 'customer' },  // Quyền, giá trị mặc định là 'customer'
    is_active: { type: Boolean, default: true },               // Trạng thái kích hoạt
    name: { type: String },                                    // Tên (nếu muốn thêm)
    address: { type: String },                                 // Địa chỉ
    phone: { type: Number },                                   // Số điện thoại
}, {
    timestamps: true  // Tự động thêm created_at và updated_at
});

module.exports = mongoose.model('User', userSchema);

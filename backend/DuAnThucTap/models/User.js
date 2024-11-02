const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },  // Tên đăng nhập
    email: { type: String, required: true, unique: true },     // Email, phải là duy nhất
    password: { type: String, required: true },                // Mật khẩu, sẽ được mã hóa
    role: { type: String, enum: ['admin', 'customer'], default: 'customer' }, 
    resetPasswordToken: {
        type: String,
        required: false,
    },
    resetPasswordExpires: {
        type: Date,
        required: false,
    },
    is_active: { type: Boolean, default: true },               // Trạng thái kích hoạt
}, {
    timestamps: true  // Tự động thêm created_at và updated_at
});


// Middleware để mã hóa mật khẩu trước khi lưu
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

// Phương thức để so sánh mật khẩu
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};



module.exports = mongoose.model('User', userSchema);

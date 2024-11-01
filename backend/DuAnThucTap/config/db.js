const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Đọc file .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    console.log(`Connected to database: ${mongoose.connections[0].name}`); // In ra tên DB đã kết nối
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Thoát nếu lỗi
  }
};

module.exports = connectDB;

const mongoose = require('mongoose');
<<<<<<< HEAD
const dotenv = require('dotenv');

dotenv.config(); // Đọc file .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Thoát nếu lỗi
  }
};

module.exports = connectDB;
=======

const local = "mongodb+srv://tiendung2004lv:DungTT@cluster0.0fg6y.mongodb.net/duan";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
>>>>>>> 5b55e41e94c7b74cd798521762230c65610cbc22

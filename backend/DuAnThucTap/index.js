
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');



require('dotenv').config(); // Đảm bảo đọc được file .env

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware để xử lý JSON trước khi định nghĩa routes
app.use(express.json()); // Đặt middleware này ở đây để xử lý body JSON trong các request

// Sử dụng morgan để log HTTP requests
app.use(morgan('dev'));

// Route gốc
app.get('/', (req, res) => {
  res.send('Welcome to the API!'); // Hoặc bạn có thể render một file HTML
});

//Notification
const notificationRoutes = require('./routes/notifications/index');
app.use(bodyParser.json());
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 3004; // Thay đổi 5000 thành 3000 hoặc cổng khác


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
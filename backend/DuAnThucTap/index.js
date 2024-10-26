
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');

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

 const categoryRoutes = require('./routes/categoryRoutes'); // Đảm bảo đúng đường dẫn
 app.use('/api/categories', categoryRoutes); // Đăng ký route cho categories


 const productRoutes = require('./routes/productRoutes'); // Đảm bảo đường dẫn đúng
 app.use('/api/products', productRoutes); // Đăng ký route cho products


 const brandRoutes = require('./routes/brandRoutes'); // Đảm bảo đường dẫn đúng
 app.use('/api/brands', brandRoutes); // Đăng ký route cho brands

 const reviewRoutes = require('./routes/reviewRoutes'); // Đảm bảo đường dẫn đúng
 app.use('/api/reviews', brandRoutes); // Đăng ký route cho brands

const PORT = process.env.PORT || 3001; // Thay đổi 5000 thành 3000 hoặc cổng khác


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

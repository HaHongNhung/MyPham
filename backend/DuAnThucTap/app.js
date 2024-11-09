require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Kết nối MongoDB
connectDB();

// Cấu hình view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Route gốc
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Đăng ký các route API
const indexRouter = require('./routes/index');
const notificationRoutes = require('./routes/notifications/index');
const live_chatRoutes = require('./routes/live_chat/index');
const live_chat_detailRoutes = require('./routes/live_chat_detail/index');
const userRoute = require('./routes/users/users');
const blogRoute = require('./routes/blogs/index');
const authRoute = require('./routes/client/auth/authRoute');
const blogRouteClient = require('./routes/client/blogs/blogRoute');
const orderRoute = require('./routes/orders/index');
const orderItemRoute = require('./routes/orderItems/index');
const cartRoute = require('./routes/carts/index');
const categoryRoutes = require('./routes/categories/index.js');
const brandRouter = require('./routes/brands/index.js');
const productRoutes = require('./routes/products');
const reviewRoutes = require('./routes/reviews');
// const paymentRouter = require('./routes/payments/index');
// const couponRouter = require('./routes/coupons/index');
// const shippingRouter = require('./routes/shipping/index');

// Đăng ký route từ index (trang gốc)
app.use('/', indexRouter);

// Đăng ký route API khác
app.use('/api/notifications', notificationRoutes);
app.use('/api/live_chats', live_chatRoutes);
app.use('/api/live_chat_details', live_chat_detailRoutes);
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/auth", authRoute);
app.use("/api/blog", blogRouteClient);
app.use("/api/orders", orderRoute);
app.use("/api/orderItems", orderItemRoute);
app.use("/api/carts", cartRoute);
app.use('/api/categories', categoryRoutes);
app.use('/api/brands', brandRouter);
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
// app.use('/api/payments', paymentRouter);
// app.use('/api/coupons', couponRouter);
// app.use('/api/shipping', shippingRouter);

// Xử lý lỗi 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Xử lý lỗi chung
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Khởi động server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;

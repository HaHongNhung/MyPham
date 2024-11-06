const express = require('express');
const router = express.Router();

// Import các routes khác
const orderRoute = require('../routes/orders/index');
const orderItemRoute = require('../routes/orderItems/index');
const cartRoute = require('../routes/carts/index');
const notificationRoutes = require('../routes/notifications/index');
const live_chatRoutes = require('../routes/live_chat/index');
const live_chat_detailRoutes = require('../routes/live_chat_detail/index');
const userRoute = require('../routes/users/users');
const blogRoute = require('../routes/blogs/index');
const authRoute = require('../routes/client/auth/authRoute');
const blogRouteClient = require('../routes/client/blogs/blogRoute');

// Import route của category, product, brand, và review
const categoryRoute = require('../routes/categories/index');
const productRoute = require('../routes/products/index');
const brandRoute = require('../routes/brands/index');
const reviewRoute = require('../routes/reviews/index');

// Route mặc định
router.get('/get', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Đăng ký các routes API
router.use("/api/v1/orders", orderRoute);
router.use("/api/v1/orderItems", orderItemRoute);
router.use("/api/v1/carts", cartRoute);
router.use("/api/v1/users", userRoute);
router.use("/api/v1/blogs", blogRoute);
router.use("/api/v1/auth", authRoute);
router.use("/api/v1/blog", blogRouteClient);
router.use('/api/v1/notifications', notificationRoutes);
router.use('/api/v1/live_chats', live_chatRoutes);
router.use('/api/v1/live_chat_details', live_chat_detailRoutes);

// Đăng ký route cho category, product, brand, và review
router.use('/api/v1/categories', categoryRoute);
router.use('/api/v1/products', productRoute);
router.use('/api/v1/brands', brandRoute);
router.use('/api/v1/reviews', reviewRoute);

module.exports = router;

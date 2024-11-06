var express = require('express');
var router = express.Router();

const notificationRoutes = require('../routes/notifications/index');
const live_chatRoutes = require('../routes/live_chat/index');
const live_chat_detailRoutes = require('../routes/live_chat_detail/index');
const userRoute = require('../routes/users/users');
const blogRoute = require('../routes/blogs/index');
const authRoute = require('../routes/client/auth/authRoute'); // Route Auth tổng
const blogRouteClient = require('../routes/client/blogs/blogRoute'); // Route Auth tổng

router.get('/get', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Đăng ký các route API khác
router.use("/api/v1/users", userRoute);
router.use("/api/v1/blogs", blogRoute);

// Đăng ký route cho Auth (login, register, quên mật khẩu)
router.use("/api/v1/auth", authRoute);
router.use("/api/v1/blog", blogRouteClient);

router.use('/api/v1/notifications', notificationRoutes);
router.use('/api/v1/live_chats', live_chatRoutes);
router.use('/api/v1/live_chat_details', live_chat_detailRoutes);



module.exports = router;

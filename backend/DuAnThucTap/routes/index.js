var express = require('express');
var router = express.Router();
const userRoute = require('../routes/users/users');
const blogRoute = require('../routes/blogs/index');
const authRoute = require('../routes/client/auth/authRoute'); // Route Auth tổng
const blogRouteClient = require('../routes/client/blogs/blogRoute'); // Route Auth tổng
const orderRoute = require('../routes/orders/index');
const orderItemRoute = require('../routes/orderItems/index');
const cartRoute = require('../routes/carts/index')
router.get('/get', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Đăng ký các route API khác
router.use("/api/v1/users", userRoute);
router.use("/api/v1/blogs", blogRoute);

// Đăng ký route cho Auth (login, register, quên mật khẩu)
router.use("/api/v1/auth", authRoute);
router.use("/api/v1/blog", blogRouteClient);

router.use("/api/v1/orders", orderRoute);
router.use("/api/v1/orderItems", orderItemRoute);
router.use("/api/v1/carts", cartRoute);
module.exports = router;

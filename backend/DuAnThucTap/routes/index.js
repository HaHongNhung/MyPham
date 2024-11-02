var express = require('express');
var router = express.Router();


const userRoute = require('../routes/users/users');
const blogRoute = require('../routes/blogs/index');
const authRoute = require('../routes/client/auth/authRoute'); // Route Auth tổng

/* GET home page. */
router.get('/get', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Đăng ký các route API khác
router.use("/api/v1/users", userRoute);
router.use("/api/v1/blogs", blogRoute);

// Đăng ký route cho Auth (login, register, quên mật khẩu)
router.use("/api/v1/auth", authRoute);

module.exports = router;

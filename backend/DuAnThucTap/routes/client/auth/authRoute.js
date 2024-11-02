// routes/authRoutes.js
const express = require('express');
const authController = require('../../../controllers/Client/authController');

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register); // Thêm route cho đăng ký


// Thêm route cho yêu cầu đặt lại mật khẩu
router.post('/request-password-reset', authController.requestPasswordReset);

// Thêm route cho đặt lại mật khẩu
router.post('/reset-password', authController.resetPassword);

module.exports = router;

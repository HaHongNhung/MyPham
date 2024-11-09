// routes/authRoutes.js
const express = require('express');
const authController = require('../../../controllers/Client/authController');

const router = express.Router();

router.post('/login', authController.login);
router.post("/logout", authController.logout);
router.post('/register', authController.register); 
router.post('/request-password-reset', authController.requestPasswordReset);
router.post('/reset-password', authController.resetPassword);

module.exports = router;




const express = require("express");
const BlogController = require("../../../controllers/Client/blogController");
const authMiddleware = require("../../../middlewares/auth"); // Middleware để xác thực người dùng

const router = express.Router();

router.post("/create", authMiddleware, BlogController.createBlog);

module.exports = router;

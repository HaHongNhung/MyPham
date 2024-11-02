

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: "Bạn cần đăng nhập để tiếp tục" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Thông tin người dùng từ token
        next();
    } catch (error) {
        res.status(401).json({ message: "Xác thực không hợp lệ" });
    }
};

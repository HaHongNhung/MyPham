

const BlogService = require("../../service/clients/BlogClientService");

class BlogController {
    // Đăng blog mới
    async createBlog(req, res) {
        try {
            const { title, content } = req.body;
            const author_id = req.user.id; 

            const newBlog = await BlogService.createBlog({ title, content, author_id });
            res.status(201).json({ message: "Blog đã được đăng thành công", blog: newBlog });
        } catch (error) {
            res.status(500).json({ message: "Lỗi khi đăng blog", error: error.message });
        }
    }
}

module.exports = new BlogController();



const Blog = require("../../models/blog");

class BlogService {
    async createBlog(blogData) {
        const newBlog = new Blog(blogData);
        await newBlog.save();
        return newBlog;
    }
}

module.exports = new BlogService();

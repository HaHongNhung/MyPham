

const BlogService = require('../../service/BlogService');

class BlogController {

    // Get all blogs
    getAllBlogs = async (req, res) => {
        try {
            const data = await BlogService.getAllBlogs();
            res.json({ data });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Create a new blog
    createBlog = async (req, res) => {
        try {
            const newBlog = await BlogService.createBlog(req.body);
            res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Get blog by ID
    getBlogById = async (req, res) => {
        try {
            const blog = await BlogService.getBlogById(req.params.id);
            if (!blog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            res.json({ blog });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Update blog by ID
    updateBlog = async (req, res) => {
        try {
            const updatedBlog = await BlogService.updateBlog(req.params.id, req.body);
            res.json({ message: 'Blog updated successfully', blog: updatedBlog });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Delete blog by ID
    deleteBlog = async (req, res) => {
        try {
            const deletedBlog = await BlogService.deleteBlog(req.params.id);
            res.json({ message: 'Blog deleted successfully', blog: deletedBlog });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BlogController;

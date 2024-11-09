
const Blog = require("../models/blog");

class BlogService {
    // Fetch all blogs
    async getAllBlogs() {
        try {
            return await Blog.find().populate('author_id', 'username email'); // Populates author details if needed
        } catch (error) {
            throw new Error("Error retrieving blog list");
        }
    }

    // Fetch a blog by ID
    async getBlogById(blogId) {
        try {
            const blog = await Blog.findById(blogId).populate('author_id', 'username email');
            if (!blog) {
                throw new Error("Blog does not exist");
            }
            return blog;
        } catch (error) {
            throw new Error("Error retrieving blog");
        }
    }

    // Create a new blog
    async createBlog(blogData) {
        const { title, content, author_id, tags, is_published } = blogData;

        try {
            // Create a new blog post
            const newBlog = new Blog({
                title,
                content,
                author_id,
                tags: tags || [],
                is_published: is_published || false,
                views: 0, // Set initial view count to 0
            });

            // Save the blog post to the database
            await newBlog.save();
            return newBlog;
        } catch (error) {
            throw new Error("Error creating blog post");
        }
    }

    // Update a blog post
    async updateBlog(blogId, updateData) {
        try {
            const blog = await Blog.findById(blogId);
            if (!blog) {
                throw new Error("Blog does not exist");
            }

            // Update blog data
            Object.assign(blog, updateData);
            await blog.save();
            return blog;
        } catch (error) {
            throw new Error("Error updating blog post");
        }
    }

    // Delete a blog post
    async deleteBlog(blogId) {
        try {
            const blog = await Blog.findByIdAndDelete(blogId);
            if (!blog) {
                throw new Error("Blog does not exist");
            }
            return blog;
        } catch (error) {
            throw new Error("Error deleting blog post");
        }
    }
}

module.exports = new BlogService();
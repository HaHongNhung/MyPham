const Products = require("../model/products")

class ProductService  {
    addProducts = async (name) => {
        try {
            const existing = await Products.findOne({
                name: name
            });
            // console.log(existingShowtime);
            if (existing) {
                return {
                    status: -2,
                    message: "Thể loại đã tồn tại",
                    data: null
                };
            }
            const newProducts = new Category({
                // image: urlsImage,
                name: name
            });
            const result = await newCategory.save();
            if (result) {
                return {
                    status: 200,
                    message: "Thêm thành công",
                    data: result
                };
            } else {
                return {
                    status: 400,
                    message: "Lỗi, thêm không thành công",
                    data: []
                };
            }
        } catch (error) {
            console.error('Error:', error);
            return {
                status: -1,
                message: 'Internal server error',
                data: null
            };
        }
    }
}
module.exports = ProductService;
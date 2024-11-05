const Shipping = require('../models/shipping');

class ShippingService {
    // Lấy tất cả thông tin giao hàng
    async getAllShippings() {
        try {
            return await Shipping.find().populate('userId', 'username email');
        } catch (error) {
            throw new Error("Error retrieving shipping list");
        }
    }

    // Lấy thông tin giao hàng theo ID
    async getShippingById(shippingId) {
        try {
            const shipping = await Shipping.findById(shippingId).populate('userId', 'username email');
            if (!shipping) throw new Error("Shipping does not exist");
            return shipping;
        } catch (error) {
            throw new Error("Error retrieving shipping");
        }
    }

    // Tạo thông tin giao hàng mới
    async createShipping(shippingData) {
        try {
            const newShipping = new Shipping(shippingData);
            await newShipping.save();
            return newShipping;
        } catch (error) {
            throw new Error("Error creating shipping");
        }
    }

    // Cập nhật thông tin giao hàng
    async updateShipping(shippingId, updateData) {
        try {
            const shipping = await Shipping.findById(shippingId);
            if (!shipping) throw new Error("Shipping does not exist");

            Object.assign(shipping, updateData);
            await shipping.save();
            return shipping;
        } catch (error) {
            throw new Error("Error updating shipping");
        }
    }

    // Xóa thông tin giao hàng
    async deleteShipping(shippingId) {
        try {
            const shipping = await Shipping.findByIdAndDelete(shippingId);
            if (!shipping) throw new Error("Shipping does not exist");
            return shipping;
        } catch (error) {
            throw new Error("Error deleting shipping");
        }
    }
}

module.exports = new ShippingService();

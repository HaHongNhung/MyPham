const Coupon = require('../models/coupon');

class CouponService {
    // Lấy tất cả các mã giảm giá
    async getAllCoupons() {
        try {
            return await Coupon.find();
        } catch (error) {
            throw new Error("Error retrieving coupon list");
        }
    }

    // Lấy mã giảm giá theo ID
    async getCouponById(couponId) {
        try {
            const coupon = await Coupon.findById(couponId);
            if (!coupon) throw new Error("Coupon does not exist");
            return coupon;
        } catch (error) {
            throw new Error("Error retrieving coupon");
        }
    }

    // Tạo mã giảm giá mới
    async createCoupon(couponData) {
        try {
            const newCoupon = new Coupon(couponData);
            await newCoupon.save();
            return newCoupon;
        } catch (error) {
            throw new Error("Error creating coupon");
        }
    }

    // Cập nhật mã giảm giá
    async updateCoupon(couponId, updateData) {
        try {
            const coupon = await Coupon.findById(couponId);
            if (!coupon) throw new Error("Coupon does not exist");

            Object.assign(coupon, updateData);
            await coupon.save();
            return coupon;
        } catch (error) {
            throw new Error("Error updating coupon");
        }
    }

    // Xóa mã giảm giá
    async deleteCoupon(couponId) {
        try {
            const coupon = await Coupon.findByIdAndDelete(couponId);
            if (!coupon) throw new Error("Coupon does not exist");
            return coupon;
        } catch (error) {
            throw new Error("Error deleting coupon");
        }
    }
}

module.exports = new CouponService();

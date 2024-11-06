const CouponService = require('../models/coupon');
// const CouponService = require('../../services/CouponService');

class CouponController {
    async getAllCoupons(req, res) {
        try {
            const coupons = await CouponService.getAllCoupons();
            res.json(coupons);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCouponById(req, res) {
        try {
            const coupon = await CouponService.getCouponById(req.params.id);
            res.json(coupon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async createCoupon(req, res) {
        try {
            const coupon = await CouponService.createCoupon(req.body);
            res.status(201).json(coupon);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateCoupon(req, res) {
        try {
            const coupon = await CouponService.updateCoupon(req.params.id, req.body);
            res.json(coupon);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteCoupon(req, res) {
        try {
            const coupon = await CouponService.deleteCoupon(req.params.id);
            res.json(coupon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = CouponController;

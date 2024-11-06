const CouponController = require('../../controllers/CouponController');
const express = require('express');
const router = express.Router();

router.get('/get-coupons', new CouponController().getAllCoupons);
router.post('/add-coupon', new CouponController().createCoupon);
router.get('/get-coupon/:id', new CouponController().getCouponById);
router.put('/edit-coupon/:id', new CouponController().updateCoupon);
router.delete('/delete-coupon/:id', new CouponController().deleteCoupon);

module.exports = router;

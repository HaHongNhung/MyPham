// // const express = require('express');
// // const router = express.Router();
// // const CouponController = require('../../controllers/Admin/CouponController');
// // const couponController = new CouponController();

// // // Route lấy tất cả mã giảm giá
// // router.get('/', couponController.getAllCoupons);

// // // Route tạo mã giảm giá mới
// // router.post('/create', couponController.createCoupon);

// // // Route lấy thông tin mã giảm giá theo ID
// // router.get('/:id', couponController.getCouponById);

// // // Route cập nhật mã giảm giá
// // router.put('/:id', couponController.updateCoupon);

// // // Route xóa mã giảm giá
// // router.delete('/:id', couponController.deleteCoupon);
// const CouponController = require('../../controllers/CouponController');
// const express = require('express');
// const router = express.Router();

// router.get('/get-coupons', new CouponController().getAllCoupons);
// router.post('/add-coupon', new CouponController().createCoupon);
// router.get('/get-coupon/:id', new CouponController().getCouponById);
// router.put('/edit-coupon/:id', new CouponController().updateCoupon);
// router.delete('/delete-coupon/:id', new CouponController().deleteCoupon);

// // module.exports = router;

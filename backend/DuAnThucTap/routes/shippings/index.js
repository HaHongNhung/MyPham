// const express = require('express');
// const router = express.Router();
// const ShippingController = require('../../controllers/Admin/ShippingController');
// const shippingController = new ShippingController();

// // Route lấy tất cả thông tin giao hàng
// router.get('/', shippingController.getAllShippings);

// // Route tạo thông tin giao hàng mới
// router.post('/create', shippingController.createShipping);

// // Route lấy thông tin giao hàng theo ID
// router.get('/:id', shippingController.getShippingById);

// // Route cập nhật thông tin giao hàng
// router.put('/:id', shippingController.updateShipping);

// // Route xóa thông tin giao hàng
// router.delete('/:id', shippingController.deleteShipping);
const ShippingController = require('../../controllers/ShippingController');
const express = require('express');
const router = express.Router();

router.get('/get-shippings', new ShippingController().getAllShippings);
router.post('/add-shipping', new ShippingController().createShipping);
router.get('/get-shipping/:id', new ShippingController().getShippingById);
router.put('/edit-shipping/:id', new ShippingController().updateShipping);
router.delete('/delete-shipping/:id', new ShippingController().deleteShipping);

// module.exports = router;

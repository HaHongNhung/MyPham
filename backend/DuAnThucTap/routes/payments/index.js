// // const express = require('express');
// // const router = express.Router();
// // const PaymentController = require('../../controllers/Admin/PaymentController');
// // const PaymentController = require('../../controllers/PaymentController');
// // const paymentController = new PaymentController();

// // // Route lấy tất cả thanh toán
// // router.get('/', paymentController.getAllPayments);

// // // Route tạo thanh toán mới
// // router.post('/create', paymentController.createPayment);

// // // Route lấy thông tin thanh toán theo ID
// // router.get('/:id', paymentController.getPaymentById);

// // // Route cập nhật thông tin thanh toán
// // router.put('/:id', paymentController.updatePayment);

// // // Route xóa thanh toán
// // router.delete('/:id', paymentController.deletePayment);
// const PaymentController = require('../../controllers/PaymentController');
// const express = require('express');
// const router = express.Router();

// // router.get('/get-payments', new PaymentController().getAllPayments);
// router.post('/add-payment', new PaymentController().createPayment);
// router.get('/get-payment/:id', new PaymentController().getPaymentById);
// router.put('/edit-payment/:id', new PaymentController().updatePayment);
// router.delete('/delete-payment/:id', new PaymentController().deletePayment);

// // module.exports = router;

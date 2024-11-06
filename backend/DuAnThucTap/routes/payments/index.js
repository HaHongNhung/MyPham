const PaymentController = require('../../controllers/PaymentController');
const express = require('express');
const router = express.Router();

router.get('/get-payments', new PaymentController().getAllPayments);
router.post('/add-payment', new PaymentController().createPayment);
router.get('/get-payment/:id', new PaymentController().getPaymentById);
router.put('/edit-payment/:id', new PaymentController().updatePayment);
router.delete('/delete-payment/:id', new PaymentController().deletePayment);

module.exports = router;

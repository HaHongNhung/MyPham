const products = require('../../model/products');
const OrdersController = require('../../controllers/orderController');
const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

router.get('/get-orders', new OrdersController().getAllOrders);
router.post('/add-order', new OrdersController().AddOrder);
router.put('/edit-order/:id', new OrdersController().EditOrder);
router.delete('/delete-order/:id', new OrdersController().DeleteOrder);
router.get('/detail-order/:id', new OrdersController().OrderDetail);

module.exports = router;

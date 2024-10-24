const products = require('../../model/products');
const OrderItemController = require('../../controllers/orderItemController');
const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

router.get('/get-orderItems', new OrderItemController().getAllOrderItems);
router.post('/add-orderItems', new OrderItemController().AddOrderItem);
router.put('/edit-orderItems/:id', new OrderItemController().EditOrderItem);
router.delete('/delete-orderItems/:id', new OrderItemController().DeleteOrderItem);
router.get('/detail-orderItems/:id', new OrderItemController().OrderItemDetail);



module.exports = router;

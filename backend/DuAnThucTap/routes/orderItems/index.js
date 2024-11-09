const OrderItemController = require('../../controllers/orderItemController');
const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

router.get('/', new OrderItemController().getAllOrderItems);
router.post('/', new OrderItemController().AddOrderItem);
router.put('/:id', new OrderItemController().EditOrderItem);
router.delete('/:id', new OrderItemController().DeleteOrderItem);


module.exports = router;

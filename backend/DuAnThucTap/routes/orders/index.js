const OrdersController = require('../../controllers/orderController');
const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

router.get('/', new OrdersController().getAllOrders);
router.post('/', new OrdersController().AddOrder);
router.put('/:id', new OrdersController().EditOrder);
router.delete('/:id', new OrdersController().DeleteOrder);
// router.use('/add-newproducts', new ProductsController().AddProducts);

module.exports = router;

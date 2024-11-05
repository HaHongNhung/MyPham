const CartsController = require('../../controllers/cartController');
const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

router.get('/get-cart', new CartsController().getCart);
router.post('/add-cart', new CartsController().AddCart);
router.delete('/delete-cart/:id', new CartsController().DeleteCart);

module.exports = router;

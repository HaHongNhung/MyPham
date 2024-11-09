const CartsController = require('../../controllers/cartController');
const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

router.get('/', new CartsController().getCart);
router.post('/', new CartsController().AddCart);
router.delete('/:id', new CartsController().DeleteCart);

module.exports = router;

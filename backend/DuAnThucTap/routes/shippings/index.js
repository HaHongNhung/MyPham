const ShippingController = require('../../controllers/ShippingController');
const express = require('express');
const router = express.Router();

router.get('/get-shippings', new ShippingController().getAllShippings);
router.post('/add-shipping', new ShippingController().createShipping);
router.get('/get-shipping/:id', new ShippingController().getShippingById);
router.put('/edit-shipping/:id', new ShippingController().updateShipping);
router.delete('/delete-shipping/:id', new ShippingController().deleteShipping);

module.exports = router;

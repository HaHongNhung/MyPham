const CouponService = require('../models/shipping');

// const ShippingService = require('../../services/ShippingService');

class ShippingController {
    async getAllShippings(req, res) {
        try {
            const shippings = await ShippingService.getAllShippings();
            res.json(shippings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getShippingById(req, res) {
        try {
            const shipping = await ShippingService.getShippingById(req.params.id);
            res.json(shipping);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async createShipping(req, res) {
        try {
            const shipping = await ShippingService.createShipping(req.body);
            res.status(201).json(shipping);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateShipping(req, res) {
        try {
            const shipping = await ShippingService.updateShipping(req.params.id, req.body);
            res.json(shipping);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteShipping(req, res) {
        try {
            const shipping = await ShippingService.deleteShipping(req.params.id);
            res.json(shipping);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = ShippingController;

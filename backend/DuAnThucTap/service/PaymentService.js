const Payment = require('../models/payment');

class PaymentService {
    async getAllPayments() {
        try {
            return await Payment.find().populate('userId', 'username email');
        } catch (error) {
            throw new Error("Error retrieving payment list");
        }
    }

    async getPaymentById(paymentId) {
        try {
            const payment = await Payment.findById(paymentId).populate('userId', 'username email');
            if (!payment) throw new Error("Payment does not exist");
            return payment;
        } catch (error) {
            throw new Error("Error retrieving payment");
        }
    }

    async createPayment(paymentData) {
        try {
            const newPayment = new Payment(paymentData);
            await newPayment.save();
            return newPayment;
        } catch (error) {
            throw new Error("Error creating payment");
        }
    }

    async updatePayment(paymentId, updateData) {
        try {
            const payment = await Payment.findById(paymentId);
            if (!payment) throw new Error("Payment does not exist");

            Object.assign(payment, updateData);
            await payment.save();
            return payment;
        } catch (error) {
            throw new Error("Error updating payment");
        }
    }

    async deletePayment(paymentId) {
        try {
            const payment = await Payment.findByIdAndDelete(paymentId);
            if (!payment) throw new Error("Payment does not exist");
            return payment;
        } catch (error) {
            throw new Error("Error deleting payment");
        }
    }
}

module.exports = new PaymentService();

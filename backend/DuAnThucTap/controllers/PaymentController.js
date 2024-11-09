// const PaymentService = require('../../services/PaymentService');

// class PaymentController {
//     async getAllPayments(req, res) {
//         try {
//             const payments = await PaymentService.getAllPayments();
//             res.json(payments);
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     }

//     async getPaymentById(req, res) {
//         try {
//             const payment = await PaymentService.getPaymentById(req.params.id);
//             res.json(payment);
//         } catch (error) {
//             res.status(404).json({ message: error.message });
//         }
//     }

//     async createPayment(req, res) {
//         try {
//             const payment = await PaymentService.createPayment(req.body);
//             res.status(201).json(payment);
//         } catch (error) {
//             res.status(400).json({ message: error.message });
//         }
//     }

//     async updatePayment(req, res) {
//         try {
//             const payment = await PaymentService.updatePayment(req.params.id, req.body);
//             res.json(payment);
//         } catch (error) {
//             res.status(400).json({ message: error.message });
//         }
//     }

//     async deletePayment(req, res) {
//         try {
//             const payment = await PaymentService.deletePayment(req.params.id);
//             res.json(payment);
//         } catch (error) {
//             res.status(404).json({ message: error.message });
//         }
//     }
// }

// module.exports = PaymentController;


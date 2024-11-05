const orders = require("../models/orders");

// const ProductService = require("../service/ProductService");

class OrdersController {
    getAllOrders = async (req, res) => {
        try {
            const data = await orders.find().populate('user_id');
            // console.log('data: ', data);
            res.json({              
                data: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    AddOrder = async (req, res) => {      
        try {
            const order = req.body;
            // console.log(order.user_id)
            const user_id = order.user_id 
            const order_status = order.order_status 
            const payment_method = order.payment_method 
            const total_price = order.total_price 
            
            const ObjectOrder = new orders({             
                user_id,
                order_status,
                payment_method,
                total_price, 
            })
            const result = await ObjectOrder.save()
            res.json({             
                data: result
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
    EditOrder = async (req, res) => {      
        try {
            const {id} = req.params           
            const order = await orders.findById(id)
            console.log(id,order)
            const user_id = req.body.user_id 
            const order_status = req.body.order_status 
            const payment_method = req.body.payment_method 
            const total_price = req.body.total_price 
            let result
            if(order){
                order.user_id  = user_id ?? order.user_id,
                order.order_status = order_status ?? order.order_status,
                order.payment_method = payment_method ?? order.payment_method,
                order.total_price = total_price ?? order.total_price,
                 result = await order.save()
            }  
            res.json({             
                data: result
            })          
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
    DeleteOrder = async (req, res) => {      
        try {
            const {id} = req.params           
            const order = await orders.findByIdAndDelete(id)
            res.json({             
                data: order
            })          
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
}
module.exports = OrdersController;

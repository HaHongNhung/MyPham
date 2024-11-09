const orderItems = require("../models/orderItems");
const Product = require("../models/Product"); // Đảm bảo file có tên chính xác

// const ProductService = require("../service/ProductService");

class OrdersController {
    getAllOrderItems = async (req, res) => {
        try {
            const data = await orderItems.find().populate('order_id').populate('product_id');
            // console.log(data);
            res.json({              
                data: data
            })
        } catch (error) {
            console.log(error);
        }
    }
    AddOrderItem = async (req, res) => {      
        try {
            const orderItem = req.body;
            // console.log(order.user_id)
            const order_id = orderItem.order_id 
            const product_id = orderItem.product_id 
            const quantity = orderItem.quantity 
            const unit_price = orderItem.unit_price 
           
            
            const ObjectOrderItem = new orderItems({             
                order_id,
                product_id,
                quantity,
                unit_price
            })
            const result = await ObjectOrderItem.save()
            res.json({             
                data: result
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
    EditOrderItem = async (req, res) => {      
        try {
            const {id} = req.params           
            const orderItem = await orderItems.findById(id)
            const order_id = req.body.order_id 
            const product_id = req.body.product_id 
            const quantity = req.body.quantity 
            const unit_price = req.body.unit_price 
            let result
            if(orderItem){
                orderItem.order_id  = order_id ?? orderItem.order_id,
                orderItem.product_id = product_id ?? orderItem.product_id,
                orderItem.quantity = quantity ?? orderItem.quantity,
                orderItem.unit_price = unit_price ?? orderItem.unit_price,
                 result = await orderItem.save()
            }  
            res.json({             
                data: result
            })          
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
    DeleteOrderItem = async (req, res) => {      
        try {
            const {id} = req.params           
            const orderItem = await orderItems.findByIdAndDelete(id)
            res.json({             
                data: orderItem
            })          
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Có lỗi xảy ra" });
        }
    }
}
module.exports = OrdersController;

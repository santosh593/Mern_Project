const order = require('../model/orderModel.js');

// create order 
exports.createOrder = async(req,res,next)=>{
    const ordercreate = order.create(req.body);
    res.status(200).json({
        success:true,
        ordercreate
    });
}


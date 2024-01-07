const category = require('../model/categoryModel.js');

// create order 
exports.createCategory = async(req,res,next)=>{
    const categorycreate = category.create(req.body);
    res.status(200).json({
        success:true,
        categorycreate
    });
}

// create order 
exports.getCategory = async(req,res,next)=>{
    const categorys = await category.find();
    res.status(200).json({
        success:true,
        categorys
    });
}
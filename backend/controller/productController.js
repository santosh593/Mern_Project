const product = require('../model/productModel.js');
// get All product
exports.getAllProduct = async(req,res,next)=>{
    const { query, page = 1, pageSize = 4 } = req.query;
    const filter = query ? { name: { $regex: query, $options: 'i' } } : {};
    const skip = (page - 1) * pageSize;

    const products = await product.find(filter)
    .skip(skip)
    .limit(parseInt(pageSize));

  const totalCount = await product.countDocuments(filter);
  const totalPages = Math.ceil(totalCount / pageSize);

  res.status(200).json({ products, totalPages });
}

// create product 
exports.createProduct = async(req,res,next)=>{
    const file = req.files;
    let fileData = [];
    for(let i =0; i<file.length; i++){
      fileData.push(file[i].filename);
    }

    const requestBody  = {...req.body,image:fileData}
    const products = await product.create(requestBody);
    res.status(200).json({
        success:true,
        products
    });
}

// delete product

exports.deleteProduct = async(req,res,next)=>{
    const products = await product.deleteOne({'_id':req.params.id});
    res.status(200).json({
        success:true,
        products
    });
}

//update product 
exports.updateProduct = async(req,res,next)=>{
   const Product =  await product.findByIdAndUpdate({_id: req.params.id}, req.body);
   res.status(200).json({
      success:true,
      Product
   })
}


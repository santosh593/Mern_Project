const { default: mongoose } = require('mongoose');
const product = require('mongoose');

const productdata = product.Schema({
    name:{
        type:String
       // required:true
    },
    sku:{
        type:String
        //required:true
    },
    price:{
        type:Number
        // required:true
    },
    category:{
        type:String
       // required:true
    },
    stock:{
        type:Number
        //required:true
    },
    image:{
        type:Array
    },
    featured:{
        type:String
    },
    bestseller:{
        type:String
    },
    noOfReview:{
        type:Number
    },
    review:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('product',productdata);
const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('user',userModel);
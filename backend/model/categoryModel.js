const mongoose = require("mongoose");

const categoryModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    parent_id:{
        type:String,
        require:true
    }

});

module.exports = mongoose.model('category',categoryModel);
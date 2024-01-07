const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require('../model/userModel.js');
// get user list 

exports.userList = async(req,res,next)=>{
    const userdata = await user.find();
    res.status(200).json({
        sucess:true,
        userdata
      });
}

// create User

exports.createUser = async(req,res,next)=>{
    const haspasswordStrength = process.env.PASSWORD_STRENGTH;
    const secretKey = process.env.SECRETE_KEY;
    const passwordincrypt = await bcrypt.hash(req.body.password,10);
    const requestBody = {...req.body, password:passwordincrypt};
    const userdata = await user.create(requestBody);
    const username = req.body.email;
    const userdatas = await user.findOne( {'email':username} ).select("+password");

    const token = jwt.sign({user:userdatas._id,username:userdatas.email},secretKey,{expiresIn:process.env.TOKEN_EXPIRE});
    res.status(200).json({
        sucess:true,
        token:token
      });
}

// delete user
exports.deleteUser = async(req,res,next)=>{
    const userdata = await user.deleteOne({'_id':req.params.id});
    res.status(200).json({
        sucess:true,
        userdata
    });
}

//update user
exports.updateUser = async(req,res,next)=>{
    const userdata = await user.findByIdAndUpdate({_id: req.params.id}, req.body);
    res.status(200).json({
        sucess:true,
        userdata
    });
}

// login user
exports.userLogin = async(req,res,next)=>{
   const secretKey = process.env.SECRETE_KEY;
    const username = req.body.username;
    const password = req.body.password;
    const userdata = await user.findOne( {'email':username} ).select("+password");
    const isMatch = await bcrypt.compareSync(req.body.password,userdata.password);
    const token = jwt.sign({user:userdata._id,username:userdata.email},secretKey,{expiresIn:process.env.TOKEN_EXPIRE});

    console.log(isMatch);
    res.status(200).json({
        success:true,
        token:token
    })
}
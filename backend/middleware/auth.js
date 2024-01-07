const jwt = require("jsonwebtoken");
exports.isAuthorized = (req,res,next) =>{
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    
    const userdata = jwt.verify(token, process.env.SECRETE_KEY);
            req.user = userdata;
        next();

}

exports.roleAuthorization = (...role) =>{
  
}
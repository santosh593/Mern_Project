require("dotenv").config({path:"db/config.env"});


const express =require("express");
const cors = require('cors');
const app = express();
app.use(cors());
require("./db/connection.js");
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const categoryRoute = require("./routes/categoryRoutes.js");
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");
const orderRoute = require("./routes/orderRoutes.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload",express.static("./upload"));
app.use("/api/v1",userRoute);
app.use("/api/v1",categoryRoute);
app.use("/api/v1",productRoute);
app.use("/api/v1",orderRoute);
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
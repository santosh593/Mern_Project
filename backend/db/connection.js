const mongo = require("mongoose");

mongo.connect(process.env.DB_URL,{
    useNewUrlParser: true,
      useUnifiedTopology: true
}).then(()=> console.log("DataBase Connected"));
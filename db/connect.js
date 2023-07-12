const mongoose=require("mongoose");
const { useCallback } = require("react");
const connectDB=(uri)=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

};
module.exports=connectDB;
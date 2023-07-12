require("dotenv").config();
const express=require("express");
const Products=require("./model/product");
var cors=require('cors')

const PORT=process.env.PORT || 2000;
const products_routes=require("./routes/products");
const connectDB=require("./db/connect");
const app=express();
//defining a root 
app.get("/",(req,res)=>{
    res.send("Your resume")

});
app.use(cors());
app.get("/getAllUser",async(req,res)=>{
    try{
        const allUser=await Products.find({});
        res.send({status:"ok",data:allUser});
        console.log("working fineeeeeeee>>>>>")
    }
    catch(error){
        console.log(error)
    }
})

app.use("/api/products",products_routes);
const start =async()=>{
    try { 
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{

           console.log(`${PORT} "connected"`)
        });
        
    } catch (error) {
        console.log(error)
        
    }
}
start();

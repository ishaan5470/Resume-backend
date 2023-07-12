//what getAllproducts will gonna be doing 
const Products=require("../model/product");
const getAllProducts=async(req,res)=>{
    const resumeData=await Products.find({});
    res.status(200).json({resumeData});

};
const getAllProductsTesting=async(req,res)=>{
    res.status(200).json({msg:"tesing the fetched data"})
};
module.exports={getAllProducts,getAllProductsTesting};  
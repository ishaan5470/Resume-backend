const mongoose=require("mongoose")
const schema=mongoose.Schema
const userpost=new schema({
    firstName: {type: String,required:true},
    lastName: {type: String},
    role:{type:String},
    description:{type:String},
    skills:[{type:String}],
    achievements:[{
        duration:{type:String},
        details:{type:String}
    }],
    emailid:{type:String},
    phoneNumber:{type:String},
    location: {type:String},
    educationalDetails:[{
        institute:{type:String},
        course:{type:String},
        percentage:{type:String},
        period:{type:String}
    }],
    experience:[{
        company:{type:String},
        duration:{type:String},
        details:{type:String},
        
    }],
    projects:[{
        name:{type:String},
        role:{type:String},
        time:{type:String},
    }],
    gitLink:{type:String},
    linkedin:{type:String},
    portfolio: {type:String},
    image:{
        type:String
    }

}) 
module.exports=mongoose.model("Product",userpost);
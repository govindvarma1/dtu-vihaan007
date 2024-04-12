import mongoose from "mongoose";

const BankSchema=new mongoose.Schema(
    {
        bankName:{
            type:String,
            required:true,
            // unique:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        pincode:{
            type:String,
            required:true
        },
        posts:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "BankPost"
        }]
    }
)

const Bank=mongoose.model("Bank",BankSchema)
export default Bank
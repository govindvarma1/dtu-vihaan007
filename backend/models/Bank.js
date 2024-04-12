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
        }
    }
)

const Bank=mongoose.model("Bank",BankSchema)
export default Bank
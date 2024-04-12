import mongoose from "mongoose";

const BankPostSchema=new mongoose.Schema(
    {
        announcement:{
            type:String,
            required:true
        },
        bloodGroupRequired:{
            type:String
        },
        quantity:{
            type:String
        },
        datePosted:{
            type:Date,
            default:Date.now()
        },
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bank'
        }
    }
)

const BankPost=mongoose.model("BankPost",BankPostSchema)
export default BankPost
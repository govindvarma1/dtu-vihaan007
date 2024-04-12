import mongoose from "mongoose";

const UserPostSchema=new mongoose.Schema(
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

const UserPost=mongoose.model("UserPost",UserPostSchema)
export default UserPost
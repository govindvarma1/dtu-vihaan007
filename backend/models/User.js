import mongoose from "mongoose";

const UserSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            // unique:true
        },
        password:{
            type:String,
            required:true
        },
        bloodGroup:{
            type:String,
            required:true
        },
        lastDonated:{
            type:Date
        },
        posts:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }]
    }
)

const User=mongoose.model("User",UserSchema)
export default User
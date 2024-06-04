import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        maxLength: 50,
    },
    lastName:{
        type:String,
        required:true,
        maxLength: 50,
    },
    email:{
        type:String,
        required:true,
        unique: true,
        minLength: 3,
        maxLength: 30
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    hashPassword:{
        type:String,
        required:true,
        minLength: 6
    },
    createdOn:{
        type:Date,
        default:new Date()
    },
    role:{
        type:String,
        enum: ['Admin','User'],
        default:'User',
    },
    active:{
        type:Boolean,
        default:true
    },
    courts: [{ type: mongoose.Types.ObjectId, ref: "Courts" }],

});
  
  // Export the model
  export const User = mongoose.model("User", userSchema);
 
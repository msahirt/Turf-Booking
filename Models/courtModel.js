import mongoose from "mongoose";

const courtSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required: true
    },
    adress1:{
        type:String,
        required: true
    },
    address2:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    landMark:{
        type:String,
        required: true
    },
    pin:{
        type:String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            // Regular expression for basic mobile number validation (adjust based on your needs)
            return /^\d{10}$/.test(v);
          },
          message: props => `${props.value} is not a valid mobile number. Must be 10 digits.`
        }
    },
    courtPics:{
        type:Array
    },
    timeStamp:{
        type:Date,
        default: Date.now()
    }
})

export const Court = mongoose.model("Court", courtSchema);
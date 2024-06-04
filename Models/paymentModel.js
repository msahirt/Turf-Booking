import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    paymentID: {
        type:String,
        required:true,
        maxLength: 50,
    },
    amount :{
        type : Number,
        required : true
    },
    paymentDate: {
        type : Date,
        default : Date.now()
    },
    paymentMethod : {
        type : String,
        required : true
    },
    user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    courts: [{ type: mongoose.Types.ObjectId, ref: "Courts" }]

})

export const payment = mongoose.model("Payment", paymentSchema);

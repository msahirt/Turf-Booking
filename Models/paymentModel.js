import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    paymentID: {
        type:String,
        required:true,
        maxLength: 50,
    },
    totalCost :{
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
    status : {
        type : Number,
        default : 1
        // 1 started,
        // 2 successfull,
        // 3 failed,
        // 4 refund
    },
    bookedBy: [{ type: mongoose.Types.ObjectId, required : true, ref: "User" }],
    courtId: [{ type: mongoose.Types.ObjectId, required : true, ref: "Courts" }]

})

export const Payment = mongoose.model("Payment", paymentSchema);

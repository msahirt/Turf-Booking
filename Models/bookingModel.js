import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    bookingId:{
        type:String,
        required:true,
        maxLength: 50,
    },
    bookingDate:{
        type:Date,
        default:new Date(),
        required : true
    },
    timeSlot:{
        type: TimeRanges,
        required : true
    },
    user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    courts: [{ type: mongoose.Types.ObjectId, ref: "Courts" }],

})

export const Booking = mongoose.model("Booking", bookingSchema);
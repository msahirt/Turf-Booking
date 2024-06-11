import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    bookingId:{
        type:String,
        required:true,
        maxLength: 50,
    },
    bookedDate:{
        type:Date,
        required : true
    },
    timeSlot:{
        type: Array,
        required : true
    },
    bookedBy: [{ type: mongoose.Types.ObjectId, required : true, ref: "User" }],
    courtId: [{ type: mongoose.Types.ObjectId, required : true, ref: "Courts" }]

})

export const Booking = mongoose.model("Booking", bookingSchema);
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    rating : {
        type : String,
        required : true
    },
    comment : {
        type : String
    },
    reviewdate : {
        type : Date,
        default : Date.now()
    },
    user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    courts: [{ type: mongoose.Types.ObjectId, ref: "Courts" }]

})
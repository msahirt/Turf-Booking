import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

    transactionId: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    paymentMethod: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        required: true, 
        default: "pending" 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },

    bookedBy: [{ type: mongoose.Types.ObjectId, required: true, ref: "User" }],
    courtId: [{ type: mongoose.Types.ObjectId, required: true, ref: "Courts" }],
});

export const Payment = mongoose.model("Payment", paymentSchema);

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// console.log(process.env.DB_URL);

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("mongoDB connected");
        
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}
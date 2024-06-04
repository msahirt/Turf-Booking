import express from "express";

import { signup, signin, adminSignup } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.send("user route");
})

userRouter.post("/signup", signup);
userRouter.post("/adminsignup", adminSignup);
userRouter.post("/signin", signin);

export default userRouter;
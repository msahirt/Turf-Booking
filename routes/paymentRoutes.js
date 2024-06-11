import express from "express"
import { orders, verify } from "../Controllers/paymentController.js";
import { userAuth } from "../middlewares/authorization.js";
const paymentRouter = express.Router();

paymentRouter.post('/orders', userAuth, orders);
paymentRouter.post('/verify', userAuth, verify);


export default paymentRouter;
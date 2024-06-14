import express from "express"
// import { orders, verify } from "../Controllers/paymentController.js";
import { createPayment, PaymentToken } from "../Controllers/paymentController.js";
import { userAuth } from "../middlewares/authorization.js";
const paymentRouter = express.Router();

paymentRouter.get('/orders',PaymentToken);
paymentRouter.post('/orders',createPayment);

paymentRouter.post('/verify', userAuth, );


export default paymentRouter;
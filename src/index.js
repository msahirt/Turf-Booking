import express from "express";
import cookieparser from "cookie-parser";
import userRouter from "../routes/userRoutes.js";
import { connectDB } from "../config/db.js";
import paymentRouter from "../routes/paymentRoutes.js";
import courtRouter from "../routes/courteRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieparser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", courtRouter);
app.use("/api/v1/payments", paymentRouter);


connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
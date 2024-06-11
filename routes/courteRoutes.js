import express from "express";

import { getCourt, createnewcourt } from "../Controllers/courtController.js";
import upload from "../middlewares/upload.js";

const courtRouter = express.Router();

courtRouter.get("/getcourt", getCourt);
// courtRouter.post("/addnewcourt", createnewcourt);
courtRouter.post("/addnewcourt", upload.single("image"), createnewcourt);



export default courtRouter;

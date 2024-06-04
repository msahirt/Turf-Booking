import express from "express";

import { adminAuth } from "../middlewares/authorization.js";

const adminRouter = express.Router();
import multer from "multer";
import { createnewcourt } from "../Controllers/courtController.js";

const storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'public/assets')
    },
    filename: function(req,file,cb){
      cb(null,file.fieldname+'-'+Date.now() +file.originalname)
    }
  })
  
  const upload = multer({storage:storage})

adminRouter.post('/createnewcourt', adminAuth,upload.array('files'),createnewcourt);

export default adminRouter;




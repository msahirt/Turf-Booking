import multer from "multer";


const storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'public/assets')
    },
    filename: function(req,file,cb){
      cb(null,file.originalname)
      // cb(null,file.fieldname+'-'+Date.now() +file.originalname)
    }
  })
  
  const upload = multer({storage:storage})
  export default upload;
  
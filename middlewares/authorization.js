import jwt from "jsonwebtoken";

export const userAuth = (req,res,next)=>{
    try {
        const token = req.headers['authorization']
        jwt.verify(token,process.env.JWT_PASSWORD,(err,decodedToken)=>{
            if(decodedToken){
                req.userId=decodedToken._id
                next()
            }else{
                res.status(401).json({message:'unauthorized user'})
            }
        })
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

export const adminAuth = (req,res,next)=>{
    try {
        const token = req.headers['authorization']
        jwt.verify(token,process.env.JWT_PASSWORD,(err,decodedToken)=>{
            if(decodedToken && decodedToken._doc.role==="Admin"){
                req.userId=decodedToken._doc._id
                next()
            }else{
                res.status(401).json({message:'unauthorized user'})
            }
        })
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}
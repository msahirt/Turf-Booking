import { Payment } from "../Models/paymentModel.js"

export const orders = ((req,res)=>{
    const {
        paymentID,
        totalCost,
        paymentDate,
        paymentMethod,
        status,
        
       
    } = req.body

})

export const verify = ((req,res)=>{

})

   
        // const newUserCreated = (err,hash){
        //     User({
        //         firstName:req.body.firstName,
        //         lastName:req.body.lastName,
        //         email:req.body.email,
        //         mobileNumber:req.body.mobileNumber,
        //         hashPassword:hashPassword
        //     }).save()
        //     .then((response)=>{
        //         res.status(200).json({message:'signup successfull'})
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //         if(error.code===11000){
        //             res.status(500).json({message:`${req.body.email}`+ ' is already existing'})
        //         }else{
        //             res.status(500).json({message:'something went wrong'})
        //         }
        //     })
        // })
    //     // console.log(req.body);
    //     const {firstName,lastName,email,mobileNumber,password} = req.body;
    //     console.log(req.body);
    //     const userExist = await User.findOne({email});
    //     console.log(userExist);
    //     if(userExist){
    //         return res.send("user already exists")
    //     }

    // const saltRounds = 10;
    // const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

    // const newUser = new User({
    //     firstName,
    //     lastName,
    //     email,
    //     mobileNumber,
    //     hashPassword
    // });

    // const newUserCreated = await newUser.save();
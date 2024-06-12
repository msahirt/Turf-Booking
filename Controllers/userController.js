import bcrypt from "bcrypt"
import { User } from "../Models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async(req, res)=>{
    try{
        const hashPassword = await bcrypt.hash(req.body.hashPassword, parseInt(process.env.SALT_ROUNDS));
        const newUser = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            mobileNumber:req.body.mobileNumber,
            hashPassword:hashPassword
        })
        console.log(newUser);
        const newUserCreated = await newUser.save();
     
    console.log(newUserCreated);
    if(!newUser){
        return res.send("user not created")
    }
    const token = generateToken(req.body.email);
    res.cookie("token",token)    
    res.send("User created Successfully");
    } catch (error) {
        console.log(error, "Something went wrong");
        res.status(500).send("Internal Server Error");
    }
    
};

export const adminSignup = async(req, res)=>{
try{
    const {firstName, lastName,email,mobileNumber,role} = req.body;
    const userExist = await User.findOne({email});
    console.log(userExist);
if(userExist){
    return res.send("user already exists")
}

const hashPassword = await bcrypt.hash(req.body.hashPassword, parseInt(process.env.SALT_ROUNDS));

const newUser = new User({
    firstName,
    lastName,
    email,
    mobileNumber,
    hashPassword,
    role
});

const newUserCreated = await newUser.save();
console.log(newUserCreated);
if(!newUser){
    return res.send("user not created")
}

const token = generateToken(email);
res.cookie("token",token)    
res.send("Admin User created Successfully");
} catch (error) {
    console.log(error, "Something went wrong");
    res.status(500).send("Internal Server Error");
}

};

export const signin = async (req,res)=>{

    try {
        console.log(req.body);
        const {email, password} = req.body;
        const user = await User.findOne({email});
        console.log(user);
    if(!user){
        return res.send("user not exists")
    }   
        console.log(user.hashPassword);
        const matchPassword = await bcrypt.compare(password, user.hashPassword);
        if(!matchPassword) {
            return res.send("password incorrect")
        }
        
        const token = generateToken(email);
        res.cookie("token",token)    
        res.send("Logged In");
    } catch (error) {
        console.log(error, "Something went wrong");
        res.status(500).send("Internal Server Error");
    }

}
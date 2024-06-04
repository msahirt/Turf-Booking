import bcrypt from "bcrypt"
import { User } from "../Models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async(req, res)=>{
        // console.log("hitted");
    try{
        // console.log(req.body);
        const {firstName, lastName,email,mobileNumber,password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);
    if(userExist){
        return res.send("user already exists")
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        firstName,
        lastName,
        email,
        mobileNumber,
        hashPassword
    });

    const newUserCreated = await newUser.save();
    console.log(newUserCreated);
    if(!newUser){
        return res.send("user not created")
    }

    const token = generateToken(email);
    res.cookie("token",token)    
    res.send("User created Successfully");
    } catch (error) {
        console.log(error, "Something went wrong");
        res.status(500).send("Internal Server Error");
    }
    
};

export const adminSignup = async(req, res)=>{
    // console.log("hitted");
try{
    // console.log(req.body);
    const {firstName, lastName,email,mobileNumber,password,role} = req.body;
    const userExist = await User.findOne({email});
    console.log(userExist);
if(userExist){
    return res.send("user already exists")
}

const saltRounds = 10;
const hashPassword = await bcrypt.hash(password, saltRounds);

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
res.send("User created Successfully");
} catch (error) {
    console.log(error, "Something went wrong");
    res.status(500).send("Internal Server Error");
}

};


export const signin = async (req,res)=>{

    try {
        const {email, password} = req.body;
        const user = await User.find({email});
        console.log(user);
    if(!user){
        return res.send("user not exists")
    }
        
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
import jsonWebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SE;

export const generateToken = (email) => {
    return jsonWebtoken.sign({data: email}, secretKey, { expiresIn: "1d"})
};

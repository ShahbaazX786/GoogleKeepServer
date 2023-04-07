import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import { sendMyCookie } from "../Utils/features.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.status(403).json({
            success: false,
            message: 'User with same Email already Exists'
        });
    }
    else{
        const hashedPassword = await bcrypt.hash(password,10);
        user = await User.create({
            name, email, password: hashedPassword
        });
        sendMyCookie(user, res, "User Registered Sucessfully!", 201);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User Doesn\'t Exist!'
        });
    }
    else {
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(404).json({
                success: false,
                message: 'Invalid Credentials, Kindly Retry'
            });
        }
        else {
            sendMyCookie(user, res, `Welcome back ${user.name}`, 200);
        }
    }
}


export const logout = async (req, res) => {
    const {token} = req.cookies;
    if(token != undefined){
        console.log(token);
        await res.status(200).cookie("token", "", { expires: new Date(Date.now()) }).json({
            success: true,
            message: "User logged out sucessfully",
          });
    }
    else{
        await res.status(200).json({
            success:false,
            message:"You are already logged out mate!"
        })
    }
};


export const getAllUsers = async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(404).json({
            success: false,
            message: "Please Login first"
        });
    }
    else {
        // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const users = await User.find({});
        res.status(200).json({
            success: true,
            users,
        });
    }
}

export const getUserById = async (req, res) => {
  res.status(200).json({
    success: true,
    user:req.user,
  });
};
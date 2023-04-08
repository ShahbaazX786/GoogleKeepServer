import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import { sendMyCookie } from "../Utils/features.js";
import ErrorHandler from "../middlewares/error.js";

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

export const login = async (req, res, next) => {
    try {
        const {token} = req.cookies;
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("User Doesn\'t Exist!"), 404)
    }
    else if(token===undefined) {
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            return next(new ErrorHandler("Invalid Credentials, Kindly Retry"), 400)
        }
        else {
            sendMyCookie(user, res, `Welcome back ${user.name}`, 200);
        }
    }
    else{
        return res.status(400).json({
            success:false,
            message:'You are already logged In!'
        })
    }
    } catch (error) {
        next(error);
    }
}


export const logout = async (req, res) => {
  const { token } = req.cookies;
  if (token != undefined) {
    // console.log(token);
    await res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "dev" ? "lax" : "none",
        secure: process.env.NODE_ENV === "dev" ? false : true,
      })
      .json({
        success: true,
        message: "User logged out sucessfully",
      });
  } else {
    await res.status(400).json({
      success: false,
      message: "You are already logged out mate!",
    });
  }
};


export const getAllUsers = async (req, res, next) => {
    const { token } = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login first to access this page!", 400));
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

export const getUserById = (req, res) => {
  res.status(200).json({
    success: true,
    user:req.user,
  });
};
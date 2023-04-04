import { User } from "../models/User.js";

export const register = async(req,res)=>{
    const {name,email,password} = req.body;
    await User.create({
        name,email,password
    });
    res.status(201).json({
        success:true,
        message:'New User Registered Sucessfully'
    });
}

export const login = async(req,res)=>{
    const {name,email,password} = req.body;
    await User.find({
        name,email,password
    });
    res.status(201).json({
        success:true,
        message:'User Already Exists'
    });
}

export const getAllUsers = async(req,res)=>{
    const users = await User.find({});
    
    res.status(200).json({
        success:true,
        users,
    });
}
import { User } from "../models/User.js";
import { HashMyPassword, sendMyCookie, verifyMyPassword } from "../Utils/features.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.status(403).json({
            success: false,
            message: 'User with same Email already Exists'
        });
    }
    else {
        const hashedPassword = HashMyPassword(password);
        user = await User.create({
            name, email, password: hashedPassword
        });
        sendMyCookie(user, res, "User Registered Sucessfully", 201);
    };
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
        const isValid = verifyMyPassword(password, user);
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


export const logout = async(req,res) =>{
    const { token } = req.cookies;
    await res.status(200).cookie("token","",{expires:new Date(Date.now())}).json({
        success: true,
        message:"User logged out sucessfully"
    });
}


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
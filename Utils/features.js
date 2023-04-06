import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";

export const sendMyCookie = (user,res,message,statusCode) =>{
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(statusCode).cookie("token", token, {
        httponly: true,
        maxAge: 15 * 60 * 1000
    }).json({
        success: true,
        message //if key and value are of same name then just write it once ex: message:message
    });
}

export const HashMyPassword = async(password) =>{
    return await bcrypt.hash(password, 10);

}

export const verifyMyPassword = async(password, user)=>{
    return await bcrypt.compare(password, user.password);
}
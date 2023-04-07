import jwt  from "jsonwebtoken";

export const sendMyCookie = (user,res,message="something went wrong unexpectedly",statusCode=200) =>{
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000 //1hour
    }).json({
        success: true,
        message:message //if key and value are of same name then just write it once ex: message:message
    });
}
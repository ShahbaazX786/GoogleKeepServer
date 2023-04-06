import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description:String,
    status:{
        type:Boolean,
        default:false
    },
    isTrashed: {
        type: Boolean,
        default: false
    },
    createdAt:{
        required:true,
        type:Date,
        default:Date.now
    },
    modifiedAt:{
        type:Date,
        required:true,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
});

export const Task = new mongoose.model('Task', taskSchema);

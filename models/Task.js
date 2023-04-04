import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description:String,
    status:String,
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
    }
});

export const Task = new mongoose.model('Task', taskSchema);

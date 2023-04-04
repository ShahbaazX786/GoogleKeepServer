import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:String
});

export const Task = new mongoose.model('Task', taskSchema);

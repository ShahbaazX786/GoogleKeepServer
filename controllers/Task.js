import { Task } from "../models/Task.js"

export const getAllTasks = async (req, res) => {
    const tasks = await Task.find({});

    res.status(200).json({
        success: true,
        tasks,
    });
}


export const createNewTask = async (req, res) => {
    const { title, description, status } = req.body;
    await Task.create({
        title,description,status
    });
    res.status(201).json({
        success: true,
        message: 'New Task Created Sucessfully'
    });
}

export const getTaskById = async (req, res) => {
    const { id } = req.body._id;
    await Task.find({
        _id:id
    });
    res.status(200).json({
        success: true,
        message: 'Task Exists Already'
    });
}
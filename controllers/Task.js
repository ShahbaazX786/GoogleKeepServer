import { Task } from "../models/Task.js"

export const getAllTasks = async (req, res) => {
    const tasks = await Task.find({});

    res.status(200).json({
        success: true,
        tasks,
    });
}


export const createNewTask = async (req, res) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(404).json({
            success: false,
            message: "Please Login first"
        });
    }
    else{
        const { title, description } = req.body;
        await Task.create({
            title,description,user:req.user
        });
        res.status(201).json({
            success: true,
            message: 'Created New Task'
        });
    }
}

export const getTaskById = async (req, res) => {
    const { id } = req.body.id;
    await Task.findOne({
        _id:id
    });
    res.status(200).json({
        success: true,
        message: 'Task Exists Already'
    });
}
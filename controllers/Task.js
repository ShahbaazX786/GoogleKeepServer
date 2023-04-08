import { Task } from "../models/Task.js";
import ErrorHandler from "../middlewares/error.js";

export const getAllTasks = async (req, res, next) => {
  const tasks = await Task.find({});
  if (!tasks)
    return next(new ErrorHandler("There are currently No Tasks!", 404));

  res.status(200).json({
    success: true,
    tasks,
  });
};

export const getUserTasks = async (req, res, next) => {
  const userId = req.user._id;
  const tasks = await Task.find({
    user: userId,
  });
  if (!tasks)
    return next(new ErrorHandler("There are currently No Tasks!", 404));

  res.status(200).json({
    success: true,
    tasks,
  });
};

export const getTaskById = async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findOne({
    _id: id,
  });
  if (!task)
    return next(
      new ErrorHandler(
        "The Task you are looking for is Either Deleted or Doesn't Exist!",
        404
      )
    );

  res.status(200).json({
    success: true,
    task,
  });
};

export const createNewTask = async (req, res) => {
  const { title, description } = req.body;
  await Task.create({
    title,
    description,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    message: "Created New Task Sucessfully!",
  });
};

export const updateTask = async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findById({
    _id: id,
  });
  if (!task) {
    return next(new ErrorHandler("Task Not Found", 404));
  } else {
    task.status = !task.status;
    await task.save();
    res.status(200).json({
      success: true,
      message: "Task updated Sucessfully!",
    });
  }
};

export const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById({
    _id: id,
  });
  if (!task) {
    return next(new ErrorHandler("Task Not Found", 404));
  } else {
    task.isTrashed = !task.isTrashed;
    await task.save();

    res.status(200).json({
      success: true,
      message: "Task Deleted Sucessfully!",
    });
  }
};

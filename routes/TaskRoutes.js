import Express from "express";
import { getAllTasks, createNewTask, getTaskById } from "../controllers/Task.js"

const Router = Express.Router();

Router.get('/', getAllTasks);

Router.post('/new', createNewTask);

Router.post('/:id', getTaskById);

// Router.post('/old', deleteTask);

// Router.post('/old', updateTask);

export default Router;
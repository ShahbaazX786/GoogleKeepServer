import Express from "express";
import { isAuth } from "../middlewares/authenticator.js";
import { getAllTasks, createNewTask, getTaskById, getUserTasks, updateTask, deleteTask } from "../controllers/Task.js"

const Router = Express.Router();

Router.get('/', isAuth, getAllTasks);

Router.get('/mytasks', isAuth, getUserTasks);

Router.post('/new', isAuth, createNewTask);

Router.route('/:id').get(isAuth, getTaskById).put(isAuth, updateTask).delete(isAuth, deleteTask);

export default Router;
import Express  from "express";
import { getAllUsers, register, login } from "../controllers/User.js";

const Router = Express.Router();

Router.get('/', getAllUsers);

Router.post('/new', register);

Router.post('/old', login);

export default Router;
import Express  from "express";
import { getAllUsers, register, login, logout } from "../controllers/User.js";

const Router = Express.Router();

Router.get('/', getAllUsers);

Router.post('/register', register);

Router.post('/login', login);

Router.get('/logout', logout);

export default Router;
import Express  from "express";
import { isAuth } from "../middlewares/authenticator.js";
import { getAllUsers, register, login, logout, getUserById } from "../controllers/User.js";

const Router = Express.Router();

Router.get('/', getAllUsers);

Router.get('/me', isAuth, getUserById);

Router.post('/register', register);

Router.post('/login', login);

Router.get('/logout', logout);

export default Router;
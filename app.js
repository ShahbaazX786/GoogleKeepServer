import express from 'express';
import UserRouter from './routes/UserRoutes.js';
import TaskRouter from './routes/TaskRoutes.js';
import { config } from "dotenv";
import cookieParser from 'cookie-parser';


export const app = express();

config({
    path:"./config.env"
});

//middlewares
app.use(express.json());    
app.use(cookieParser());
app.use('/api/v1/users',UserRouter);
app.use('/api/v1/tasks',TaskRouter);



app.get('/',(req,res)=>{
    res.send('Hello there!');
})

app.get('/users',(req,res)=>{
    User.find(req.body);
})

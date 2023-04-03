import express from 'express';
import UserRouter from './routes/UserRoutes.js';
import { config } from "dotenv";


export const app = express();

config({
    path:"./config.env"
});

//middlewares
app.use(express.json());
app.use('/users',UserRouter);



app.get('/',(req,res)=>{
    res.send('Hello there!');
})

app.get('/users',(req,res)=>{
    User.find(req.body);
})

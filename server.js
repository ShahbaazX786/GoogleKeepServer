const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.DB_URI,{
    dbName:process.env.DB_NAME
})
.then((success)=>{console.log('Connected to Database Successfully!')})
.catch(error=>{console.log('Some Error Occured while connecting to the DB!!\n'+error)})


app.get('/',(req,res)=>{
    res.send('Hello there!');
})

app.listen(PORT,()=>{
    console.log(`server started on PORT number ${PORT}!`);
})
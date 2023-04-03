const express = require('express');

const app = express();


app.listen(process.env.PORT || 4000,()=>{
    console.log(`server started on PORT number ${process.env.PORT}`);
})
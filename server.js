import { app } from "./app.js";
import { ConnectToDatabase } from "./Database/DBconn.js";

ConnectToDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server started on PORT number ${PORT}!`);
});
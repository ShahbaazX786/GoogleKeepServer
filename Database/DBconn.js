import mongoose from "mongoose";

export const ConnectToDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    })
    .then((success) => {
      console.log("Connected to Database Successfully!");
    })
    .catch((error) => {
      console.log("Some Error Occured while connecting to the DB!!\n" + error);
    });
};

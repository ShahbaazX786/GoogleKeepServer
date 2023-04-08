import express from "express";
import UserRouter from "./routes/UserRoutes.js";
import TaskRouter from "./routes/TaskRoutes.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();

//configuring env file location(for local purposes).
config({
  path: "./config.env",
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// using express routes
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/tasks", TaskRouter);
app.use(errorMiddleware);

// default home route
app.get("/", (req, res) => {
  res.send("Hello there! <br> This server is currently working as expected!");
});

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Import Routers
import userRouter from "./Routers/userRouter";

app.use("/api/user", userRouter);

export default app;
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "../middlewares/error-middleware.js";
import userRoute from "../routes/user-route.js";
import dotenv from "dotenv";
import { postRoute } from "../routes/post-route.js";

dotenv.config();
const web = express();
web.use(cors({ credentials: true, origin: "http://localhost:5173" }));
web.use(cookieParser());
web.use(express.json());
web.use(express.static("public"));
web.use(userRoute);
web.use(postRoute);
web.use(errorMiddleware);

export default web;

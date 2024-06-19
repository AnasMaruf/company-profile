import express from "express";
import userController from "../controllers/user-controller.js";

const userRoute = new express.Router();
userRoute.post("/api/register", userController.register);

export default userRoute;

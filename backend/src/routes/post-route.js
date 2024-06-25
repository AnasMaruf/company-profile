import express from "express";
import { verifyToken } from "../middlewares/verifyToken-middleware.js";
import postController from "../controllers/post-controller.js";
import { upload } from "../middlewares/upload-middleware.js";

const postRoute = new express.Router();
postRoute.use(verifyToken);
postRoute.use(upload.single("image"));
postRoute.get("/api/posts", postController.search);
postRoute.post("/api/posts", postController.create);
postRoute.put("/api/posts/:postId", postController.update);
postRoute.delete("/api/posts/:postId", postController.remove);

export { postRoute };

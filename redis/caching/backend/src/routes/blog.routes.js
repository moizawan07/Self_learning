import express from "express";
import multer from "multer";
import { createBlog, getBlogs } from "../controller/blog.controller.js";

const router = express.Router();
const upload = multer();

router.post("/", upload.single("image"), createBlog);
router.get("/", getBlogs);

export default router;

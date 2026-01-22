import Blog from "../models/blog.js";
import redis from "../config/redis.js";
import s3 from "../config/s3.js";
import { v4 as uuid } from "uuid";

export const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const file = req.file;

  const upload = await s3.upload({
    Bucket: process.env.AWS_BUCKET,
    Key: `images/public/${uuid()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  }).promise();

  const blog = await Blog.create({
    title,
    content,
    imageUrl: upload.Location,
  });

  // ❌ old cache clear
  await redis.del("blogs");

  res.json(blog);
};

export const getBlogs = async (req, res) => {
  // 🔥 Redis first
  const cached = await redis.get("blogs");
  console.log("cachesd ==>", cached);
  
  if (cached) {
    console.log("FROM REDIS");
    return res.json(JSON.parse(cached));
  }

  console.log("FROM DB");
  const blogs = await Blog.find().sort({ createdAt: -1 });

  // ✅ cache for 60 seconds
  await redis.setex("blogs", 60, JSON.stringify(blogs));

  res.json(blogs);
};

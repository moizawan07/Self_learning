import express from "express";

const app = express();
import connectDB from "./src/config/db.js";
import blogRoutes from "./src/routes/blog.routes.js";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

app.use(express.json());
app.use(cors());
app.use("/api/blogs", blogRoutes);

connectDB(process.env.MONGO_URI);

app.listen(5000, () => {
  console.log("Server running on 5000");
});

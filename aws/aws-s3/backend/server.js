import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import { uploadToS3, getSignedUrl } from "./service/s3.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

let filesDB = [];

// Upload
app.post("/api/upload", upload.single("file"), async (req, res) => {
  const { isPublic } = req.body;

  const key = await uploadToS3(req.file, isPublic === "true");

  filesDB.push({
    id: Date.now(),
    name: req.file.originalname,
    key,
    isPublic: isPublic === "true",
  });

  res.json({ message: "Uploaded" });
});

// Get files
app.get("/api/files", async (req, res) => {
  const data = await Promise.all(
    filesDB.map(async (file) => {
      if (file.isPublic) {
        return {
          ...file,
          url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.key}`,
        };
      } else {
        return {
          ...file,
          url: await getSignedUrl(file.key),
        };
      }
    }),
  );

  res.json(data);
});

app.listen(5000, () => console.log("Server running"));

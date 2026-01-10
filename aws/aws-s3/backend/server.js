import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer"; // file upload ke liye
import { uploadToS3 } from "./service/s3.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());




// multer setup
const storage = multer.memoryStorage(); // files memory me store hongi
const upload = multer({ storage });

let filesDB = []; // simple in-memory DB (for example)

// ---------- CREATE (Upload File) ----------
app.post("/api/files", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const url = await uploadToS3(file);
    const newFile = { id: filesDB.length + 1, name: file.originalname, url };
    filesDB.push(newFile);
    res.status(201).json(newFile);
  } catch (error) {
    console.log("errror ==>", error.message);
    
    res.status(500).json({ message: error.message });
  }
});

// ---------- READ (Get all files) ----------
app.get("/api/files", (req, res) => {
  res.json(filesDB);
});

// ---------- UPDATE (Replace file) ----------
app.put("/api/files/:id", upload.single("file"), async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = filesDB.findIndex(f => f.id === id);
    if (index === -1) return res.status(404).json({ message: "File not found" });

    const file = req.file;
    const url = await uploadToS3(file);
    filesDB[index].name = file.originalname;
    filesDB[index].url = url;

    res.json(filesDB[index]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---------- DELETE ----------
app.delete("/api/files/:id", (req, res) => {
  const id = parseInt(req.params.id);
  filesDB = filesDB.filter(f => f.id !== id);
  res.json({ message: "File deleted successfully" });
});

// ---------- Server ----------
app.listen(5000, () => console.log("Server running on port 5000"));

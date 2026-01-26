import mysql from "mysql2/promise";
import {config} from "dotenv";
config();

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "YOUR_PASSWORD",
  database: process.env.DB_NAME || "user_management",
  waitForConnections: true,
  connectionLimit: 10,
});

export default db;

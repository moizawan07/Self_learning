const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require("cors");
const { config } = require("dotenv");
const authRoutes =  require('./routes/authRoutes.js')
config();

app.use(express.json());

app.use(morgan('dev'))

app.use('/auth', authRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server is running on PORT" + PORT));

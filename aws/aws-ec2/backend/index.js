const express = require('express');
const app = express();
const {config} = require('dotenv');
const cors = require('cors');
config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'AWS EC2 Backend is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
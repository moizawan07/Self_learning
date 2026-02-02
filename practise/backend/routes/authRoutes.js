const express = require('express')
const routes = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage});
const userModel = require('../models/userModel.js');


routes.post('/signup', upload.single('profileImage'),   async (req, res) =>{
    const {name,email, profileImage, password} = req.body;
    const file = req.file;

    console.log("req.body ==>", req.body);
    console.log("req.file ==>", req.file);

    if(!name || !email || !password){
        return res.status(400).json({message: "All fields are required"})
    }

    try {
        const user = await userModel.findOne({email});

        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        const hashPassword = await bcryptJs.hash(password, 10);

        const result = new userModel(
            {name,
            email,
            profileImage: file.secure_url,
            password: hashPassword
        }
        )
        await result.save();
        res.status(201).json({message: "User created successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal server error"})
    }
});

// routes.post('/login', login)

module.exports = routes;
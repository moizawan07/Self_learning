const express = require('express');
const routes = express.Router();    


// get all users with pagination 
routes.get('/users', (req, res) => {
    console.log("req query ==>", req.query);
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
})

module.exports = routes;
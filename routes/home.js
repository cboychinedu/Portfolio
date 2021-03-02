// Importing the necessary modules 
const express = require('express'); 
const path = require('path'); 
const { rootPath } = require('../app.js'); 
const router = express.Router(); 

// Setting the routes for the 'home' page 
router.get('/', (req, res) =>
{
    // Getting the full path to the 'home.html' file 
    let fullPath = path.join(rootPath, 'static', 'templates', 'home.html'); 

    // Sending the 'home.html' page 
    res.sendFile(fullPath); 
}); 

// Exporting the "home" route 
module.exports = router; 
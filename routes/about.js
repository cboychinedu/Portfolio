// Importing the necessary modules 
const express = require('express'); 
const path = require('path'); 
const { rootPath } = require('../app.js'); 
const router = express.Router(); 

// Setting the routes for the home page 
router.get('/', (req, res) =>
{
    // Getting the full path to the "index.html" file 
    let fullPath = path.join(rootPath, 'static', 'templates', 'about.html'); 

    // Sending the index page "index.html" 
    console.log(fullPath); 
    res.sendFile(fullPath); 
}); 

// Exporting the "home" route 
module.exports = router; 
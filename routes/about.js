// Importing the necessary modules 
const express = require('express'); 
const path = require('path'); 
const { rootPath } = require('../app.js'); 
const router = express.Router(); 

// Setting the routes for the about page 
router.get('/', (req, res) =>
{
    // Getting the full path to the "about.html" file 
    let fullPath = path.join(rootPath, 'static', 'templates', 'about.html'); 

    // Sending the about page "about.html" 
    res.sendFile(fullPath); 
}); 

// Exporting the "about" route 
module.exports = router; 
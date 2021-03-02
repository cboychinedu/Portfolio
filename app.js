// Importing the required routes 
const path = require('path'); 
const express = require('express'); 
const config = require('config'); 
const morgan = require('morgan'); 
const mongodb = require('mongoose'); 
const { ObjectId } = require('mongodb'); 

// Getting the root path and exporting it 
let rootPath = path.join(__dirname); 
module.exports.rootPath = rootPath; 

// Importing the required routes 
const about = require('./routes/about.js'); 

// Building the express application 
const app = express(); 

// Setting the views 
app.set(
    'view engine', 'pug'
); 
app.set(
    'views', './views'
); 

// Adding the necessary middlewares 
app.use(express.json()); 
app.use(express.static('static')); 
app.use(express.static('./static/css')); 
app.use(express.static('./static/javascript')); 
app.use(express.static('./static/templates')); 
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('tiny')); 

// Configuring the routes 
app.use('/about', about); 

// Setting the PORT and HOST connections 
const PORT = process.env.PORT || 3000; 
const HOST = process.env.HOST || 'localhost'; 

// Running the server 
app.listen(PORT, HOST, () =>
{
    // Displaying the server message 
    console.log(`The server is running on ${HOST + ':' + PORT}`); 
})
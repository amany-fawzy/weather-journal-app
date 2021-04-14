// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port= 8000;
const server = app.listen(port, listening);
function listening (){
    console.log('server is running');
    console.log(`running on localhost: ${port}`);
};
// Initialize all route with a callback function

app.get('/all',sendData);

// Callback function to complete GET '/all'

function sendData(req,res){
    res.send(projectData);
    
};

// Post Route


app.post('/data',addData);

function addData(req,res){
    console.log(req.body);
    newEntry={
        zip:req.body.zip,
        feeling:req.body.feeling,
        date:req.body.date,
       
        temp:req.body.temp,
        
    }
    projectData=newEntry;
//console.log(newEntry);
 res.send(projectData);
 console.log(projectData);
    //res.send(data);
    //console.log(data);
}




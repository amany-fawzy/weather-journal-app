# Weather-Journal App Project

## Table of Contents

* Author Name
* Project Brief
* Languages
* Quick Summary

### Author Name

Amany Fawzy Mohamed.

### Project Brief

This project  is an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

### Languages

1. css

1. javascript


### Quick Summary

* style (color:black;) added to .header, #entryHolder, #date, #temp, #content, .headline , .title.

* Node and Express installed on the local machine. The project file server.js required express(), and an instance of their app created using express.

```javascript
const express = require('express');

const app = express();
```

* The Express app instance pointed to the project folder with .html, .css, and .js files.

```javascript
app.use(express.static('website'));

```
* The ‘cors’ package installed in the project from the command line, required in the project file server.js, and the instance of the app setup to use cors().
```javascript
const cors = require('cors');
app.use(cors());
```

* The body-parser package installed and included in the project.
```javascript

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

* Local server are running and producing feedback to the Command Line through a working callback function.

```javascript
const port= 8000;
const server = app.listen(port, listening);

function listening (){
    console.log('server is running');
    console.log(`running on localhost:http://localhost:${port}`);
};
```

* The personal API Key for OpenWeatherMap API is saved in a named const variable.

```javascript
const personalApiKey= '&appid=bfdad66ac528dc404c4fe7833e8aaa68&units=metric';  //metric
```
* The API Key variable is passed as a parameter to fetch() .

```javascript
/* Function to GET Web API Data*/
const getZip= async(baseURL,zip,key)=>{
    const res = await fetch(baseURL+zip+key)
   
    
    try{
        const data= await res.json();
        console.log(data) 
        return data;   
    }catch (error){
        console.log('error',error);
        // appropraitely handle the error
    }

}
```

* There is a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.

```javascript
app.get('/all',sendData);

function sendData(req,res){
    res.send(projectData);
};
```

* In the file app.js, the element with the id of generate  have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.

```javascript
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);


/* Function called by event listener */
function performAction(e){
 //select the actual value of an HTML input to include in post
 const newZip= document.getElementById('zip').value;
 const feeling=document.getElementById('feelings').value;
getZip(baseURL,newZip,personalApiKey)
// New syntax!
.then (function (data){
// Add data
console.log(data);
postData('/data',{zip:newZip,feeling:feeling,date:d,temp:data.main.temp});
//console.log(newEntry);
})
.then(() => updateUI())
}
```

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

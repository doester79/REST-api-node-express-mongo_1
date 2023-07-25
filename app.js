//***Rest API tut.

//import express module
const express = require('express');
const app = express();          //create express application

//import mongoose module to connect to mongodb
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');   //file containing login info for mongodb cloud atlas

//tell epxress to use body-parser for application
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

app.get(route, callback)

// This function tells what to do when a get request at the given route is called. 
// The callback function has 2 parameters, request(req) and response(res). 
// The request object(req) represents the HTTP request and has properties for the request 
// query string, parameters, body, HTTP headers, etc. Similarly, the response object 
// represents the HTTP response that the Express app sends when it receives an HTTP request.

///create a route.
app.get('/', (req, res) =>{
    res.send('We are on home');
});

//connect to mongodb cloud atlas
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true,
        useUnifiedTopology:true 
    }, ).then(()=> console.log('Connected Successfully to Db')).catch((err)=> {console.error(err); });


//listen to server
app.listen (3000)
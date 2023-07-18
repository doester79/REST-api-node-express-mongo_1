//import package
const express = require('express');
//execute express
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Import Routes
const postsRoute =require('./routes/posts');

//Middleware
app.use('/posts', postsRoute)


//create Routes
app.get('/', (req, res) =>{
    res.send('We are on home');
});



//connect to mongodb
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true,
        useUnifiedTopology:true 
},).then(()=> console.log('Connected Successfully to Db')).catch((err)=> {console.error(err); });


   //listen to server
app.listen (3000)
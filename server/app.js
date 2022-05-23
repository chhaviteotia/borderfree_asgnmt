const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require ('express');
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());

// to link the router files
app.use(require('./router/auth'));

// to secure port number
const PORT = process.env.PORT;

//Middleware

// const middleware =(req, res, next) => {
//     console.log("hello from middleware");
//     next()
// }

// app.get('/products', middleware, (req, res) => {
//     res.send('Hello World from about');
// });


app.get('/signin', (req, res) => {
    res.send('Hello World from signin');
});

app.get('/signup', (req, res) => {
    res.send('Hello World from registration');
});

app.listen(PORT, () =>{
    console.log('Server is running!!');
})
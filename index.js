const express = require('express');
// const path = require('path');
const ejs = require('ejs');
const app = express();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});

//Templating Engine
app.set('view engine', 'ejs');

//Static files (css, img, code)
app.use(express.static('public'));

//App Endpoints
app.get('/', (req,res) => {
    res.render('index');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/contact', (req,res) => {
    res.render('contact');
});

app.get('/post', (req,res) => {
    res.render('post');
})

//Server Spin-up
app.listen(3000,() => {
    console.log("App listening at Port 3000");
})
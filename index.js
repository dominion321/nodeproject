const express = require('express');
// const path = require('path');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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

app.get('/post/new', (req,res) => {
    res.render('create');
});

app.post('/posts/store',(req,res) => {
    console.log(req.body);
    res.render('/');
});

//Server Spin-up
app.listen(3000,() => {
    console.log("App listening at Port 3000");
})
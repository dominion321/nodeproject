const express = require('express');
// const path = require('path');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});

//Schema Declaration
const BlogPost = require('./models/BlogPost.js');

//Port number declaration
const port = 3000;

//Body Parser Library
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Templating Engine
app.set('view engine', 'ejs');

//Static files (css, img, code)
app.use(express.static('public'));

//App Endpoints
app.get('/', async (req,res) => {
    const blogposts = await BlogPost.find({});
    console.log(blogposts, {blogposts});
    res.render('index', {blogposts});
});

//The About Page
app.get('/about', (req,res) => {
    res.render('about');
});

//The Contact Page
app.get('/contact', (req,res) => {
    res.render('contact');
});

//test
app.get('/test',(req,res) => {
    res.render()
})

//Opens up the available posts
app.get('/post', (req,res) => {
    res.render('post');
})

//Opens up the 'New Post' Page
app.get('/post/new', (req,res) => {
    res.render('create');
});

// app.get('/post/search',async (req,res) => {
//     const blogposts = await BlogPost.find({})
//     res.render('test', {blogposts});
// })

// app.get('/post/search/:id',async (req,res) => {
//     const blogposts = await BlogPost.find(/req.body.title/)
//     res.render('test', {blogposts});
// })

//Creating a Post for the user
app.post('/posts/store',async (req,res) => {
    await BlogPost.create(req.body, (error,blogpost) =>{
        res.redirect('/');
    })
});

//The Index page 
app.get('/post', (req,res) =>{
    res.render('/');
})

//Opens all the available posts in one page
app.get('/post/:id', async (req,res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    console.log(blogpost, "Oshey ooo");
    res.render('post' ,{blogpost});
})

//Server Spin-up
app.listen(port,() => {
    console.log(`App listening at Port ${port}`);
})
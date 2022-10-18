const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connecy('mongodb://localhost/my_database/',{UseNewUrlParser:true});
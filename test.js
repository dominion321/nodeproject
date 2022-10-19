const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connecy('mongodb://localhost/my_database/',{UseNewUrlParser:true});

BlogPost.create({
    title:"The Story of a Young Inquisite Softwrae Billionaire.",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione provident vel debitis odio, nihil vitae! Velit, voluptatibus nesciunt veritatis similique voluptatem mollitia placeat quod nihil, illo architecto magnam fuga optio?"
},(error, blogpost) => {
    console.log(err,blogpost);
})
const express = require('express');
const morgan = require('morgan');
const mondoose = require('mongoose');
const blogRoutes=require('./routes/blogRoutes')
//express app
const app = express();

///concets to mongodb
const dbURI = 'mongodb+srv://kato:kato2013@nodetuts.pvjlvgd.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts'
mondoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { app.listen(3000); })
    .catch((err) => { console.log(err) })
///rejister view engine
app.set('view engine', 'ejs');
app.set('views',)
///liste for request
// app.listen(3000);

/// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })) //form input info

// app.use((req,res , next)=>{
//     console.log('new request made:');
//     console.log('host:',req.hostname);
//     console.log('path:',req.path);
//     console.log('method:',req.method);
//     next();
// })


//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
// const blog=new Blog({
//     title:'new blog',
//     snippet:'about my new blog',
//     body:'more about my new blog'
// });

// blog.save()
//  .then((result)=>{
//     res.send(result)
//  })
//  .catch((err)=>{
//     console.log(err)
//  });
// })
//    ///saved all
// app.get('./all-blogs' , (req , res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{console.log(err)})
// })
//         //find by id
// app.get('/single-blog',(req ,res)=>{
//     Blog.findById("65f5684a5f2391c7fc4d8f74")
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{console.log(err)})
// })




app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html',{root:__dirname})
    // const blogs=[
    //     {title:"yoshi finds eggs",snippet:"lorem ispum dolor sit amet consectetur"},
    //     {title:"mario finds stars",snippet:"lorem ispum dolor sit amet consectetur"},
    //     {title:"how to defeat bowser",snippet:"lorem ispum dolor sit amet consectetur"}
    // ]
    // res.render('index' , {title:"home",blogs:blogs})
    res.redirect('/blogs')
})
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html',{root:__dirname})
    // res.send('<p>about page</p>');

    res.render('about', { title: "About" })

})

///redirection
app.get('/about-us', (req, res) => {
    res.redirect('/about', { title: "create" })
})

//blog routes
app.use(blogRoutes)

///404 es bolos unda eweros yoveltvis
app.use((req, res) => {
    // res.sendFile('./views/404.html',{root:__dirname})
    res.status(404).render('404', { title: "404" })
})

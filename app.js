const express =require('express');

//express app
const app=express();
///rejister view engine
app.set('view engine','ejs');
app.set('views',)
///liste for request
app.listen(3000);
app.get('/',(req , res)=>{
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html',{root:__dirname})
    const blogs=[
        {title:"yoshi finds eggs",snippet:"lorem ispum dolor sit amet consectetur"},
        {title:"mario finds stars",snippet:"lorem ispum dolor sit amet consectetur"},
        {title:"how to defeat bowser",snippet:"lorem ispum dolor sit amet consectetur"}
    ]
    res.render('index' , {title:"home",blogs:blogs})
})
app.get('/about',(req , res)=>{
    // res.sendFile('./views/about.html',{root:__dirname})
    // res.send('<p>about page</p>');
  
    res.render('about',{title:"About"} )

})
app.get('/blogs/create',(req , res)=>{
    res.render('create',{title:"Create a new Blog"});
})
///redirection
app.get('/about-us',(req,res)=>{
    res.redirect('/about',{title:"create"})
})

///404 es bolos unda eweros yoveltvis
app.use((req,res)=>{
    // res.sendFile('./views/404.html',{root:__dirname})
    res.status(404).render('404',{title:"404"})
})

var express = require('express');
var hbs = require('hbs');
const fs = require('fs');
var app = express();

const port = process.env.port || 3000;

hbs.registerPartials(__dirname + '/Views/partials');

app.set('view engine','hbs');

// app.use((req,res,next) =>{
//
//     var now = new Date().toString();
//
//     var log = `${now}:${req.method} ${req.url}`;
//
//     console.log(log);
//     next();
//
// });



hbs.registerHelper('currentYear', ()=>{
   return  new Date().getFullYear();
});


// hbs.registerHelper('sssss', (text)=>{
//     return  text.toUpperCase();
// });

// app.use((req,res,next)=>{
//     res.render('Maintnec.hbs');
//     next();
// });

app.get('/',  (req,res)=> {

    res.render('home.hbs' , {
        pageTitle:'Home Page'
    })
});


app.get('/about',  (req,res)=> {

    res.render('about.hbs',{
        pageTitle:'About us Page',
        name:'kasim'
    })
});

app.get('/name',(req,res)=>{
   res.send(
       {
           name:'kasim',
           likes:['coding','sdsd']
       }
       )
});

app.listen(port , ()=>{
    console.log(`server running on port ${port}`)
});





var express = require('express');
var hbs = require('hbs');
const fs = require('fs');
var app = express();

// app.use((req,res,next)=>{
//
//     var log = `${Date().toString()} : ${req.method} ${req.url}`;
//    // console.log(log);
//     fs.appendFile('' , log + '\n', (err,data)=>{
//         if(err) throw err;
//         else {
//             console.log(data)
//             next();
//         }
//     })
//
// });

app.use((req,res,next) =>{

    var now = new Date().toString();

    var log = `${now}:${req.method} ${req.url}`;

    console.log(log);
    next();

});

hbs.registerPartials(__dirname + '/Views/partials');

app.set('view engine','hbs');

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

app.listen(3000 , ()=>{
    console.log("server running on port 3000")
});





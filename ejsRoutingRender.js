const express=require('express');
const app=express();
const path=require('path');
const dirPath=path.join(__dirname,'public');

app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
        res.sendFile(`${dirPath}/index.html`);
});
app.get('/home',(req,res)=>{
    res.sendFile(`${dirPath}/index.html`);
});
app.get('/about',(req,res)=>{
    res.sendFile(`${dirPath}/about.html`);
});
app.get('/contact',(req,res)=>{
    res.sendFile(`${dirPath}/contact.html`);
});


app.get('/profile',(req,res)=>{
    const user=[
        {name:'piyush',email:'piyush@gmmil.com',contact:'8077327606',skills:['php','java','node']},
        {name:'anuj',email:'anuj@gmmil.com',contact:'8077173949',skills:['photoshop','java','javascript']},
        {name:'utkarsh',email:'utkarsh@gmmil.com',contact:'7534900050',skills:['php','java','.NET','javascript']}
    ]
   
   
    res.render('profile',{user});
});

app.get('/login' ,(req,res)=>{
    res.render('login');
});
app.get('*' ,(req,res)=>{
    res.sendFile(`${dirPath}/404.html`);
 });

app.listen(4500);
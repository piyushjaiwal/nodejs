const express=require('express');
const app=express();
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter your age.");
    }else if(req.query.age<18){
        res.send("You are unauthorized to see the content.");
    }else{
        next();
    }
}

app.use(reqFilter);
app.get('/',(req,res)=>{
    res.send('Welcome to home Page');
});

app.get('/users',(req,res)=>{
    res.send('Welcome to users Page');
});

app.listen(4500);
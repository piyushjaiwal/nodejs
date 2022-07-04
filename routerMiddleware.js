const express=require('express');
const app=express();
const reqFilter=require('./middleware');
const route=express.Router();
route.use(reqFilter);
app.get('/',(req,res)=>{
    res.send('Welcome to home Page');
});

route.get('/users',(req,res)=>{
    res.send('Welcome to users Page');
});
app.use('/', route);
app.listen(4500);
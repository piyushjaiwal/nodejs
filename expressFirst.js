const express=require('express');
const app=express();
app.get('',(req,res)=>{
    console.log('Welcome ',req.query.name);
    res.send(`<h1>Hello, ${req.query.name}</h1>, home page.`);
});

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="Enter user name"/><br/><br/>
    <button>Click Me!</button>
    <a href='/'>Go to home page</a>
    `)
});

app.get('/contact',(req,res)=>{
    res.send([{
        name:'piyush',
        email:'piyush@gmail.com',
        contact:'8077327606'
    },
    {
        name:'anuj',
        email:'anuj@gmail.com',
        contact:'8077173949'

    },
    {
        name:'utkarsh',
        email:'utkarsh@gmail.com',
        contact:'8386682851'

    }]
    );
});

app.listen(4700);
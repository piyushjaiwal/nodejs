const express=require('express');
const app=express();
let path=require('path');
const { pathToFileURL } = require('url');
path=path.join(__dirname,'public');
console.log(path);

app.use(express.static(path));

app.listen(4500);
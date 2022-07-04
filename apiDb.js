const express=require('express');
const app=express();

const readData=require('./readDbAsync');
const insertData=require('./insertDbAsync');
const updateData=require('./updateDbAsync');
const mongoDbConnection = require('./mongoDbConnection');
const mongodb=require('mongodb');
const deleteData=require('./deleteDbAsync');

app.use(express.json());

app.get('/',async (req,res)=>{
    let result=await readData();
    res.send(result);
});

app.post('/',async (req,res)=>{
    let data=req.body;
    let acknowledgement=await insertData(data);
    res.send(acknowledgement);
});

app.put('/:name',async (req,res)=>{
      
     let filter={name:req.params.name};
     let updates={$set:req.body};
     let acknowledgement=await updateData(filter,updates);
     res.send(acknowledgement);

});

app.delete('/:id',async (req,res)=>{

  let filter={_id:new mongodb.ObjectId(req.params.id)};
  let acknowledgement=await deleteData(filter);
  res.send(acknowledgement);
});

app.listen(5000);
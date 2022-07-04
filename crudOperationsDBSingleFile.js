const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);

//READ
function getData()
{
    client.connect().then((connection)=>{
        let db=connection.db('youtube');
        let collection=db.collection('videos');
        collection.find({}).toArray().then((data)=>{
            console.log(data);
        });
    });
    
}
//CREATE
const data=[
    {_id:'3',name:'utkarsh',email:'utkarsh@gmail.com', contact:'7534900050'},
    {_id:'4',name:'tanmay',email:'tanmay@gmail.com', contact:'7534900078'},
    {_id:'5',name:'jyoti',email:'jyoti@gmail.com', contact:'8368862851'},
    {_id:'6',name:'vimal',email:'vimal@gmail.com', contact:'8534900050'}
]
async function setData(data)
{
    let connection=await client.connect();
    let db=connection.db('youtube');
    let collection=db.collection('videos');
    collection.insertMany(data).then((acknowledge)=>{
        console.log(acknowledge);
    })
}
//getData();

//setData(data);

//DELETE
const selectedData={"name":'vimal'};
async function deleteData(selectedData){
    let connection=await client.connect();
    let db=connection.db('youtube');
    let collection=db.collection('videos');
    collection.deleteMany(selectedData).then((acknowledge)=>{
        console.log(acknowledge);
    });
    
}

deleteData(selectedData);
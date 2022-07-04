const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const dbName='youtube';
const collectionName='videos';
const client=new MongoClient(url);

module.exports=(async()=>{
    let conn=await client.connect();
    let db=conn.db(dbName);
    let collection=db.collection(collectionName);
    return collection;
});


const collectionConnect = require('./mongoDbConnection');
//const collection=require('./mongoDbConnection');
//const dbName='youtube';
//const collectionName='videos';
module.exports=(data)=>{
    //connection().then((conn)=>{
      //  let db=conn.db(dbName);
        //let collection=db.collection(collectionName);
        //collection.insertMany(data).then((acknowledgement)=>{
          //      console.log(acknowledgement);
            //    console.log("Data saved Successfully");
        //});
    //});
    collectionConnect().then((connectedCollection)=>{
        connectedCollection.insertMany(data).then((acknowledgement)=>{
            console.log(acknowledgement);
            console.log("Data entered in database successfully");
        });
    });
}

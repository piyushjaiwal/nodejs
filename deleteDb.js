const collectionConnect = require('./mongoDbConnection');
module.exports=(filter)=>{
    collectionConnect().then((connectedCollection)=>{
        connectedCollection.deleteMany(filter).then((acknowledgement)=>{
                    
                    if(acknowledgement.deletedCount!=0){
                        console.log(acknowledgement);
                        console.log("Data deleted from database successfully");
                    }else
                    {
                        console.log(acknowledgement);
                        console.log("Data can't be deleted");
                    }
        });
   });
}
const collectionConnect = require('./mongoDbConnection');
module.exports=(filter,updates)=>{
    collectionConnect().then((connectedCollection)=>{
        connectedCollection.updateOne(filter,updates).then((acknowledgement)=>{
            if(acknowledgement.deletedCount!=0){
                console.log(acknowledgement);
                console.log("Data updated in database successfully");
            }else
            {
                console.log(acknowledgement);
                console.log("Data can't be updated");
            }
        });
   });
}
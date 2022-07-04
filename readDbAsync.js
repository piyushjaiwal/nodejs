const collectionConnect = require('./mongoDbConnection');

module.exports=async (query)=>{
        
    
        let collection=(await collectionConnect()).find(query);
        let result=await collection.toArray();
        //console.log(result);
        return result;



}
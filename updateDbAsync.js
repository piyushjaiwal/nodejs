const collectionConnect = require('./mongoDbConnection');
module.exports=async (filter,update)=>{
    let acknowledgement=(await collectionConnect()).updateMany(filter,update);
    return acknowledgement;
    
}
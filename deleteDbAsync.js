const collectionConnect = require('./mongoDbConnection');
module.exports=async (filter)=>{
    let acknowledgement=(await collectionConnect()).deleteMany(filter);
    return acknowledgement;
}
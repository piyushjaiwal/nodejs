const collectionConnect = require('./mongoDbConnection');
let savedFromPromise;
module.exports=(query)=>{
let output;        
    
        collectionConnect().then((connectedCollection)=>{
            connectedCollection.find(query).toArray().then((result)=>{
                if(result.length!=0)
                {   
                    //let recordCount=result.length;
                    //console.log('Total: ' + recordCount + ' record found as per your query');
                    //console.log(result);
                   // output=await result;
                    //result.toString();          
                }else
                {
                    //output="<h1>No Record Avilable for this query.</h1>"
                    //console.log('No Record found as per your query !!!');
                    //result="<h1>No Record Avilable for this query.</h1>";
                }
                               
                                
            });
        
        });    
 //return output;      
}
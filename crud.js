const path=require('path');
const fs=require('fs');
const { FSWatcher } = require('chokidar');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;

//CREATE
//fs.writeFileSync(filePath,"Apple is a fruit")

//READ
/*fs.readFile(filePath,'utf-8',(error,content)=>{
    if(!error){
        console.log(content);
    }else{
        console.log("There occrured error : "+error);
    }
})*/

//UPDATE
/*fs.appendFile(filePath,' and it tastes sweet.',(error)=>{
    if(!error){
        console.log("File updated successfully");
    }else{
        console.log("There occrured some error : "+error);
    }
})*/


// RENAME
/*fs.rename(filePath,`${dirPath}/mango.txt`,(err)=>{
            if(!err){
                console.log("File renamed successfully");
            }else{
                console.log("There occrured some error : "+err);
            }
});*/


//DELETE
fs.unlink(`${dirPath}/mango.txt`,(err)=>{
    if(!err){
        console.log("File deleted successfully");
    }else{
        console.log("There occrured some error : "+err);
    }
})

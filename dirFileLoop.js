const fs=require('fs');
const { isEmpty } = require('lodash');
const path=require('path');
const input=process.argv;
//console.log(fs.existsSync(path.join(__dirname,input[2])));

if(!(fs.existsSync(path.join(__dirname,input[2])))){
            fs.mkdirSync(path.join(__dirname,input[2]));
            console.log("Directory created successfully");
}

const pathUpdated=path.join(__dirname,input[2]);

for(i=1;i<=5;i++){
    fs.writeFileSync(pathUpdated+"/hello"+i+".txt","This is file number "+i);
}

fs.readdir(pathUpdated,(err,files)=>{
        files.forEach((item)=>{
            fs.readFile(path.join(pathUpdated,item),'utf-8',(err,content)=>{
                    console.log("content of file "+item+" is "+content);
            });
        })
})
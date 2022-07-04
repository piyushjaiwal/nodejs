const http=require('http');
const importedData=require('./api');
http.createServer((req,resp)=>{
        resp.writeHead(200,{'Content-Type':'application\json'});
        resp.write(JSON.stringify(importedData));
        resp.end();
}).listen(4500);
const fs=require("fs");
const http = require("http");
//createServer is predefined function
const server=http.createServer(function(req , res){

fs.readFile(__dirname+"/hi.txt","utf8" ,(err,data)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.write(data);
    res.end();
    //if(err) throw err;
    //console.log(data);
});
//readFile : it gives call back value hence it is called event
}).listen(3000,()=>console.log("Server runs"));
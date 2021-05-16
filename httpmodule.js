const http = require("http");
//createServer is predefined function
const server=http.createServer(function(req , res){
res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Node is Working<h1>");

res.end();
}).listen(3000,()=>console.log("Server runs"));

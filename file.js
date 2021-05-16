const fs=require("fs");

// by default asynchronous - send request for file execute statement and then execute file
//fs.readFile(__dirname+"/hi.txt","utf8" ,(err,data)=>{
  //  console.log(data);
//});

try{
    const data = fs.readFileSync(__dirname+"/hi.txt","utf8" );
    console.log(data);
}
catch{
    console.log(e);
}
console.log("File created");
const express = require("express");
const app = express();
app.use(express.static('public'));
app.get("/",(req , res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get("/profile/:Id?",(req , res)=>{
    console.log(req.params);
    if(req.params.Id == undefined)
    res.send(" I Love You Babes! ");
    else
    res.send("I Love You !" +req.params.Id);
});
app.listen(3000 , () =>console.log("Server runs"));
var express = require("express");
var fs = require('fs');
var app = express();

app.get("/",function(req,res){
    res.end("welcome user");
})

app.get("/userlist",function(req,res){
    fs.readFile(__dirname +"/" +'user.json','utf8',function(err,data){
        console.log(data);
        res.end(data);
    })
})

app.listen(3000, function(){
    console.log("server is running 3000");
});

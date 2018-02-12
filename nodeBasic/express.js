var express=require('express');
var app=express();
var bodyparser = require("body-parser");

var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.use(urlencodedParser);
app.use(express.static("public"));

app.get("/index.html",function(req,res){
    res.sendFile(__dirname +"/"+"index.html");
})

// app.post("/getdetails",function(req,res){
//     var response={
//         username:req.body.uname,
//         password:req.body.pwd
//     }
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

app.get("/getdetails",function(req,res){
    var response={
        username:req.query.uname,
        password:req.query.pwd
    }
    console.log(response);
    res.end(JSON.stringify(response));
})
app.listen(5000);
console.log("server is running 5000");
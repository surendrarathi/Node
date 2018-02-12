var express=require('express');

var app=express();

// app.use(express.static(__dirname +"/public"));
 // Both are same working...
app.use(express.static("public"));

// if we use app.use then there is no need res.senFile method....

// app.get("/index.html",function(req,res){
//     res.sendFile(__dirname +"/"+"index.html");
// })

app.get("/getdetails",function(req,res){
    var response={
        username:req.query.uname,
        Age:req.query.age
    }
    console.log(JSON.stringify(response));
    res.send(JSON.stringify(response));
})
app.get("/",function(req,res){
    res.send("hello rathi");
    
})


app.listen(8001,function(){
    console.log("server is running..8001");
});


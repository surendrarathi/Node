// var http=require("http");
// http.createServer(function(request,response){
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
    
//     response.end('Hello World\n');
// }).listen(2000);

var express=require("express");
var bodyparser=require("body-parser");
var app=express();

// app.use(express.static('public'));
// app.get('/index.html',function(req,res){
//     res.sendFile(__dirname + "/" + "index.html");
// })
// app.get("/file_upload",function(req,res){
//     response ={
//         firstname:req.query.fname,
//         lastname:req.query.lname
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });

app.get("/",function(req,res){
        res.send("hello rathi");
      
})

// function generatename(name){
//     return new Promise(function(reject,resolve){
//         if(typeof name ==="string"){
//           resolve(name);
//         }else{
//           reject(name);
//         }
//     })
//   }
  
//   function generateview(){
//     var name="rathi";
//     generatename(name).then(function(result){
//       console.log("result is "+result);
//     }).catch(function(err){
//       console.log("error is "+err);
//     })
//   }
  


app.listen(3000,function(err,res){
    if(!err){
        console.log("listenn successfuly...");
    }else{
        consoele.log("error "+err);
    }
      
});
console.log("server is running");
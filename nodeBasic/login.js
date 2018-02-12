
var login=function(uname,pwd){
   return new Promise(function(resolve,reject){
       if(uname != undefined && pwd != undefined){
        resolve("login successfully");
       }else{
           reject("not login");
       }
      
   })
}
var logout=function(){
    return new Promise(function(resolve,reject){
        resolve("login successfully");
    })
}

var error = function(){
    return new Promise(function(resolve,reject){
      
         resolve("something went to wrong");
       
    })
}

module.exports={
    "login":login,
    "logout":logout,
    "error":error
}
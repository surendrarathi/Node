

var request=require('request');

var url="http://ipinfo.io";
var url1="http://facebook.com"

// var getlocationIP =function(callback) {
//     request({
//         url:url,
//         json:true
//     },function(error,response,body){
//         if(error){
//             callback();
//         }else{
//             callback(body);
//         }
//     });
    
// };

var getlocationIP =function() {
   return new Promise(function(resolve,reject){
    request({
        url:url,
        json:true
    },function(error,response,body){
        if(error){
            reject();
        }else{
            resolve(body);
        }
    });
   })
    
};
// var getlocationfacbook =function(callback) {
//     request({
//         url:url1,
//         json:true
//     },function(error,response,body){
//         if(error){
//             callback();
//         }else{
//             callback(body);
//         }
//     });
    
// };
module.exports ={
    getlocationIP:getlocationIP
}
function fetchImage(name){
    return new Promise(function(resolve, reject){
     if(typeof name ==="string"){
         resolve(name);
     }else{
         reject("error")
     }
    })
}
 
fetchImage("suri1").then(function(url){
    console.log(url + ' downloaded!')
    return fetchImage('suri2')
}).then(function(url){
    console.log(url + ' downloaded!')
    return fetchImage('suri3')
}).then(function(url){
    console.log(url + ' downloaded!')
    return fetchImage('suri4')
}).then(function(url){
    console.log(url + ' downloaded!')
}).catch(function(err){
    console.log("error is "+err);
})
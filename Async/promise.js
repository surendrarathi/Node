

// function workpromise(shouldfail){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(typeof shouldfail ==="boolean" && shouldfail ===true){
//                 reject("error message")
//             }else{
//                 resolve("success");
//             }
//         },1000)
//     }); 
// }

// workpromise().then(function(msg){
//     console.log(msg);
//     return workpromise(true);
// }).then(function(msg){
//     console.log(msg);
// }).catch(function(error){
//     console.log(error);
// })


function getlocation(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("India");
        },1000);
    })
}

function getwheather(location){
    return new Promise(function(resolve,reject){
        resolve("good in "+location);
    })
}

getlocation().then(function(location){
    console.log(location);
    return getwheather(location);
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})
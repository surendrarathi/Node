var location=require('./location');

// location(function(data){
//     console.log("city: "+data.city);
//     console.log("log/lat: "+data.loc);
// });


// location.getlocationIP(function(data){
//     console.log(data);
// })


// use promise 
location.getlocationIP().then(function(location){
    console.log(location);
    console.log(location.city);
}).catch(function(error){
    console.log(error);
})

// location.getlocationfacbook(function(data){
//     if(!data){
//         console.log("unable to fatch data");
//         return;
//     }
//     console.log(data);
// })
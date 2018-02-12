function getname(fname,lname){
    return new Promise(function(resolve, reject){
        var name=fname +" "+lname;
     if(typeof name ==="string"){
         resolve(name);
     }else{
         reject("error")
     }
    })
}
 
getname("suri","rathi").then(url =>{
    console.log(url)
}).catch(err =>{console.log(err)});

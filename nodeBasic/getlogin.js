var log=require("./login");
function loginDetails(uname,pwd){
    log.login(uname,pwd).then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
        log.error().then(function(err){
            console.log(err);
        })
})

}

loginDetails("ss");

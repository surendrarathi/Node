function dowork(){
    throw new Error("unable to do work");
}

try{
    dowork();
}catch(e){
    console.log("something went to wrong..");
    console.log(e.message);
}
console.log("try catch ended...")
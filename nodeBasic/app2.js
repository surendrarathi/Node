var users=[
    {
        uname:"surendra",
        password:"suri1",
        email:"suri@gmail.com"
    },
    {
        uname:"rathi",
        password:"suri2",
        email:"rathi@gmail.com"
    },
    {
        uname:"singh",
        password:"suri3",
        email:"singh@gmail.com"
    }
];

function getdetails(uanme,password,alluser){
    var getusername=false;
    var getemail=false;
    for(item in alluser){
        console.log(alluser[item]);
        if(alluser[item]["uname"]==uname ){
            if(alluser[item]["password"]==password){
                getusername =true;
                getemail =true
                break;
            }else{
                getusername=true;
                getemail=false;
                break;
            }
        }else{
            getusername=false
        }
    }
    if(getusername ==true && getemail ==true){
        console.log("login successfully");
    }else if(getusername ==true && getemail ==false){
        console.log("pwd is not valid")
    }else{
        console.log("username is not found");
    }
}
var uname="rathi";
var password="suri2";

getdetails(uname,password,users);
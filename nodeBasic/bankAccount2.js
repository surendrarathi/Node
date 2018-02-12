
var accounts=[];

function createAccount(account){
    accounts.push(account);
    return account;
}

function getAccount(username){
    var matchAccount;

    for(var i=0;i<accounts.length; i++){
        
        if( accounts[i].username === username){
            matchAccount =accounts[i];
        }
    }
    // accounts.forEach(function(data){
    //     if(data.username===username){
    //         matchAccount=data;
    //     }else{
    //        return "user is not exist";
    //     }
    // })
    return matchAccount;
}


function deposit(account,amount){

    if(typeof amount ==="number"){
        account.balance += amount;
    }else{
        console.log("amount is not a number..");
    }

}

function withdraw(account,amount){
    if(typeof amount ==='number'){
        account.balance -= amount;
        
    }
    else{
        console.log("amount is not a number..");
    }
}

function getbalance(account){
return account.balance;
}

function createbalancegetter(account){
    return function(){
        return account.balance;
    }
}

var rathiAccount= createAccount({
    username:"rathi",
    balance:0
})

var surendraAccount= createAccount({
    username:"surendra",
    balance:0
})

deposit(rathiAccount,5000);
deposit(surendraAccount,500011);

var getbal=getAccount("surendra");
var rathibalance= createbalancegetter(getbal);
console.log(rathibalance());
console.log(accounts);


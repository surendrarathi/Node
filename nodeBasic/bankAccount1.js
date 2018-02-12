
var accounts=[];

function createAccount(account){
    accounts.push(account);
    return account;
}

function getAccount(username){
    var matchAccount;
    accounts.forEach(function(data){
        if(data.username===username){
            matchAccount=data;
        }else{
           return "user is not exist";
        }
    })
    return matchAccount;
}


function deposit(account,amount){
 account.balance += amount;

}

function withdraw(account,amount){
account.balance -= amount;

}

function getbalance(account){
return account.balance;
}

var rathiAccount= createAccount({
    username:"rathi",
    balance:0
})

deposit(rathiAccount,1000);

console.log(getbalance(rathiAccount));

var surendraAccount = createAccount({
    username:"surendra",
    balance:2000
}) 
withdraw(surendraAccount,500);
console.log(getAccount("rathi"));
console.log(accounts);



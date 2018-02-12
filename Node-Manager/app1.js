
var storage = require("node-persist");

storage.initSync();

function createAccount(account){
    var accounts= storage.getItemSync("accounts");
    if(typeof accounts ==="undefined"){
        accounts=[]
    }
    accounts.push(account);
    storage.setItemSync('accounts',accounts);
    return account;
}

function getAccount(username){
    var accounts=storage.getItemSync('accounts');
    var matchaccount;

    accounts.forEach(function(account){
        if(account.name ===username){
            matchaccount=account
        }
    })
    return matchaccount;
}

createAccount({
    name:"rathi",
    password:"rathi123"
})
var getname=getAccount("rathi");
console.log(getname);
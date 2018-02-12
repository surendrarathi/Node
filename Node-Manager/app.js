
console.log("hello rathi");

var storage = require("node-persist");

storage.initSync();

storage.setItemSync("accounts",[{
    username:"rathi",
    balance:5000
},
{
    username:"surendra",
    balance:2000
}])

var accounts= storage.getItemSync("accounts");

accounts.push({
    username:"singh",
    balance:1000
})
storage.setItemSync("accounts",accounts);
console.log(accounts);
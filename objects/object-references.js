let myAccount = {
    name: 'Ben Holcomb',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount;
    console.log(account);
}

//add income 
let addIncome = function (account, amount) {
    account.income = account.income + amount;
}
// reset account - reset income to 0
let resetAccount = function(account){
    account.income = 0;
}
//get account summary
// account for Ben has income - expenses, an income of x and expenses of y
let getAccountSummary = function (account){
    return `${account.name}'s account has a balance of ${account.income - account.expenses}, an income of ${account.income} and expenses of ${account.expenses}`;
};
addIncome(myAccount, 2500);
addExpense(myAccount, 350);
console.log(getAccountSummary(myAccount));
console.log(myAccount);
console.log("wtf")
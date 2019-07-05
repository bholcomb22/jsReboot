const account = {
    name: 'Ben Holcomb',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        this.expenses.push({
        description: description,
        amount: amount})
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let addExpenses = this.expenses.forEach(function(item){
            totalExpenses = totalExpenses + item.amount
        })
        let totalIncome = 0;
        let addIncome = this.income.forEach(function(item){
            totalIncome = totalIncome + item.amount
        })

        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

//add income array to account
//addIncome method -> arg description, amount
// tweak get account summary - income - expenses 
//Ben holcomb has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950)
account.addExpense('coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary());
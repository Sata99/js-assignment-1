// create an account object

// the object should hold all of our logic

// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// name: the account holders name, should be a string
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).

let account = {
  firstName : "",
  income : [],
  expenses : [],
  addIncome : function(amount) {
  {this.income.push(amount)};
  },
  addExpenses : function (type, amount) {
    {this.expenses.push({type, amount});}
  },
  listExpenses() {
    let expenseList = this.expenses.map(expenses => `${expenses.type}: ${expenses.amount}`);
    alert(`Expenses you have: \n ${expenseList.join(" \n ")}`);
  },
  getSummary: function(){ 
    let totalIncome = this.income.reduce((sum, income) => sum + income, 0);
  let totalExpenses = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  let balance = totalIncome - totalExpenses;

  alert(`Summary:
  Total income: ${totalIncome}
  Total expenses: ${totalExpenses}
  Balance: ${balance}`);
},
};

function menu() {
  let choice;
do{
   choice = parseFloat(
    prompt("Select a choice 1.)Add income 2.)Add expense 3).List all expenses 4).Get summary"));
  
  if(choice===1){
      let incomeAmount = parseInt(prompt("Enter your income "));
      account.addIncome(incomeAmount);
  }
  if(choice===2){
    let expenseType = prompt("Enter the expense type:");
    let expenseAmount = parseInt(prompt("Enter the expense amount:"));
    account.addExpenses(expenseAmount, expenseType);
  }
  if(choice===3){
    account.listExpenses();
  }
  if(choice===4){
  account.getSummary();
  }
  }
  while (choice !== 0);
}

menu(account)
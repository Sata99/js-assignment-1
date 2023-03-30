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
  expensesName : [],
  addIncome : function(amount) {
  {this.income.push(amount)};
  },
  addExpenses : function (amount) {
    {this.expenses.push(amount);}
  },
    listAllExpenses: function(){
        alert(`Expense you have.\n 
        ${this.expenses.join(" ")}`);
  },
  getSummary: function(){ 
    alert(`
    Total income: ${account.income.reduce((sum, income) => sum + income, )}\n
    
    Total expenses: ${account.expenses.reduce((sum, expenses) => sum + expenses, )}\n
    
    Balance: ${account.income.reduce((sum, income) => sum + income, ) - account.expenses.reduce((sum, expenses) => sum + expenses, 0)}`);
  },

}

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
    let expenseAmount = 
    parseInt(prompt("Plase enter your expected amount of expenses : "));
    prompt("What are your expense?");
    account.addExpenses(expenseAmount);
  }
  if(choice===3){
    account.listAllExpenses();
  }
  if(choice===4){
  account.getSummary();
  }
  }
  while (choice !== 0);
}

  menu()

  
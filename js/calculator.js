/**
 * Budget Calculator
 */
// set input variables
var income = 50000;

/**
 * Object 
 * Calculates Allocation Goals
 */
function BudgetGoals(base) {
    
    // set income
    this.base = base;

    // set goals
    this.savings = .1;
    this.bills = .3;
    this.debt = .2;
    this.needs = .4;

    this.savingsGoal = function() {
        return base * savings;
    }

    this.billsGoal = function() {
        return base * bills;
    }

    this.debtGoal = function() {
        return base * debt;
    } 

    this.needsGoal = function() {
        return base * needs;
    }

}

budgetA = new BudgetGoals(70000);
budgetA


var elSavings = document.getElementById('income-value');
elSavings.textContent = budgetA.base;

/**
 * Object
 * given element id and element content
 */
function printout(id, content) {

    // get the element node
    this.id = document.getElementById(id);
    this.id.textContent = this.content;

    // set the node content
    this.id.textContent = this.content;


}

printDebt = new printout('debt-value', budgetA.debtGoal());
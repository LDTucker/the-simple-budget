/**
 * Budget Calculator
 */
// set input variables
var income = 1587.33;

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

    this.savingsCalc = function() {
        var savingsAmount = this.base * this.savings; // this is used for all object variables usages

        return savingsAmount.toFixed(2);
    }

    this.billsCalc = function() {
        var billsAmount = this.base * this.bills;

        return billsAmount.toFixed(2);
    }

    this.debtCalc = function() {
        var debtAmount = this.base * this.debt;

        return debtAmount.toFixed(2);
    }

    this.needsCalc = function() {
        var needsAmount = this.base * this.needs;

        return needsAmount.toFixed(2);
    }

}

budgetA = new BudgetGoals(income);


var elSavings = document.getElementById('income-value');
elSavings.textContent = budgetA.base;

/**
 * Create a function to print
 * parameters [elementId, value]
 */

 function printOut(elementId, elementValue) {
    var id = elementId;
    var value = elementValue;

    var el = document.getElementById(id);
    el.textContent = value;
 };

 printOut('savings-value', '$'+ budgetA.savingsCalc());
 printOut('debt-value', '$'+ budgetA.debtCalc());
 printOut('bills-value', '$'+ budgetA.billsCalc());
 printOut('needs-value', '$'+ budgetA.needsCalc())

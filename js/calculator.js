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
    var savings = .1;
    var bills = .3;
    var debt = .2;
    var needs = .4;

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
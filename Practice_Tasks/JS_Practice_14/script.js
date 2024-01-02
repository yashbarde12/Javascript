function calculateCompoundInterest(principal, rate, timesCompounded, years) {
    // Converting annual interest rate to a decimal
    var decimalRate = rate / 100;
    // Calculateing compound interest
    var compoundInterest = principal * Math.pow((1 + decimalRate / timesCompounded), timesCompounded * years) - principal;

    console.log("Principal Amount: Rs" + principal.toFixed(2));
    console.log("Annual Interest Rate: " + rate.toFixed(2) + "%");
    console.log("Times Compounded per Year: " + timesCompounded);
    console.log("Number of Years: " + years);
    console.log("Compound Interest: Rs" + compoundInterest.toFixed(2));
}

var principalAmount = 1000;
var annualInterestRate = 5;
var timesCompoundedPerYear = 4;
var numberOfYears = 3;

calculateCompoundInterest(principalAmount, annualInterestRate, timesCompoundedPerYear, numberOfYears);

function calculateSimpleInterest(principal, rate, time) {
    var interest = (principal * rate * time) / 100;

    console.log("Principal: Rs " + principal.toFixed(2));
    console.log("Rate of Interest: " + rate.toFixed(2) + "%");
    console.log("Time (in years): " + time);
    console.log("Simple Interest: Rs " + interest.toFixed(2));
}

var principalAmount = 1000;
var interestRate = 5;
var timeInYears = 2;

calculateSimpleInterest(principalAmount, interestRate, timeInYears);

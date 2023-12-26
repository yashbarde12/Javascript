
function calculateBMI(weight, height) {

    var heightInMeters = height / 100;

    var bmi = weight / (heightInMeters * heightInMeters);

    return bmi;
}

var weight = 70;
var height = 175;

var bmiResult = calculateBMI(weight, height);

console.log("Weight: " + weight + " kg");
console.log("Height: " + height + " cm");
console.log("BMI: " + bmiResult.toFixed(2)); // Display BMI with two decimal places

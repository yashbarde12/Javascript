function addThreeNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    // Aaddition
    var sum = num1 + num2 + num3;

    // displaying result
    console.log("The sum of " + num1 + ", " + num2 + ", and " + num3 + " is: " + sum);
}

addThreeNumbers();

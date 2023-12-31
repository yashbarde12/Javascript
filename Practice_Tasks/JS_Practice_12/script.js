function calculateSquare() {
    var userInput = prompt("Enter a number:");
    // Converting user input to a number
    var number = parseFloat(userInput);

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    var square = number * number;

    console.log("Number entered: " + number);
    console.log("Square: " + square);
}
calculateSquare();

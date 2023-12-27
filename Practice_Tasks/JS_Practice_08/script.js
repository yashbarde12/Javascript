function swapNumbers(num1, num2) {
    console.log("Before swapping: num1 =", num1, ", num2 =", num2);

    var temp = num1;
    num1 = num2;
    num2 = temp;

    console.log("After swapping: num1 =", num1, ", num2 =", num2);
}

var num1 = 5;
var num2 = 10;

swapNumbers(num1, num2);

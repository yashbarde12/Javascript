function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

var radius = 3;

var area = calculateCircleArea(radius);

console.log("Radius: " + radius + " units");
console.log("Area: " + area.toFixed(2) + " square units"); 
// area with two decimal places

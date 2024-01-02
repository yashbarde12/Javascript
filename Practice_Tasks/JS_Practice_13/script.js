function convertMetersToCentimeters() {
    var userInput = prompt("Enter length in meters:");
    // Converting user input to a number
    var lengthInMeters = parseFloat(userInput);

    if (isNaN(lengthInMeters)) {
        console.log("Invalid input. Please enter a valid length in meters.");
        return;
    }
    //(1 m = 100 cm)
    var lengthInCentimeters = lengthInMeters * 100;

    console.log("Length in meters: " + lengthInMeters + " m");
    console.log("Length in centimeters: " + lengthInCentimeters + " cm");
}
convertMetersToCentimeters();

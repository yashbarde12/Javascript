function calculateTotalAndPercentage() {
    var marks = [];

    for (var i = 1; i <= 5; i++) {
        var mark = parseFloat(prompt("Enter marks for Subject " + i + ":"));
        
        // Checking input is valid (not NaN)
        if (isNaN(mark)) {
            console.log("Invalid input. Please enter valid marks.");
            return;
        }
        // Adding mark to the array
        marks.push(mark);
    }

    var totalMarks = marks.reduce(function (sum, mark) {
        return sum + mark;
    }, 0);
    var percentage = (totalMarks / (5 * 100)) * 100;

    console.log("Marks: " + marks.join(", "));
    console.log("Total Marks: " + totalMarks);
    console.log("Percentage: " + percentage.toFixed(2) + "%");
}
calculateTotalAndPercentage();

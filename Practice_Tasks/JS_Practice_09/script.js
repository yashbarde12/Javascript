function calculateTax(salary) {
    // Assuming a fixed tax rate of 20%
    var taxRate = 0.20;

    var taxAmount = salary * taxRate;

    var netSalary = salary - taxAmount;

    console.log("Salary: Rs " + salary.toFixed(2));
    console.log("Tax (20%): Rs " + taxAmount.toFixed(2));
    console.log("Net Salary: Rs " + netSalary.toFixed(2));
}

var salary = 50000;
calculateTax(salary);

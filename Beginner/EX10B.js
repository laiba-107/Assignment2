function calculator(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return "Invalid operation";
    }
}

console.log("Result of addition:", calculator(10, 5, "add"));       // Example output: 15
console.log("Result of subtraction:", calculator(10, 5, "subtract")); // Example output: 5
console.log("Result of multiplication:", calculator(10, 5, "multiply")); // Example output: 50
console.log("Result of division:", calculator(10, 5, "divide"));     // Example output: 2

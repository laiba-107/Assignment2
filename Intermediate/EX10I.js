function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log("First 10 Fibonacci numbers:", generateFibonacci(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
<script src="EX11I.js">Next</script>
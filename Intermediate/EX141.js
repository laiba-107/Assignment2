function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return fn(...args);
    };
}

function logMessage() {
    console.log("Function executed");
}

const throttledLog = throttle(logMessage, 2000);
setInterval(throttledLog, 500);  // Function will be called every 2 seconds, even though it's triggered every 500ms

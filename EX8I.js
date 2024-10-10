function uniqueValues(arr) {
    return [...new Set(arr)];
}

const array = [1, 2, 2, 3, 4, 4, 5];
console.log("Unique values:", uniqueValues(array));  // Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log("Array without duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4]));  // Example output: [1, 2, 3, 4]

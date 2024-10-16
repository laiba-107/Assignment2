function flattenArray(arr) {
    return arr.flat(Infinity);  // Recursively flattens an array
}

const nestedArray = [1, [2, [3, [4]], 5]];
console.log("Flattened array:", flattenArray(nestedArray));  // Output: [1, 2, 3, 4, 5]
<script src="EX8I.js">Next</script>
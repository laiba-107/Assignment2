function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log("Intersection:", findIntersection(array1, array2));  // Output: [3, 4]
<script src="EX13I.js">Next</script>
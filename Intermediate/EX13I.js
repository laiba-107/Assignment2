function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = {a: 1, b: {c: 2}};
const copy = deepClone(original);
copy.b.c = 3;
console.log("Original:", original);  // { a: 1, b: { c: 2 } }
console.log("Copy:", copy);  // { a: 1, b: { c: 3 } }
<script src="EX141.js">Next</script>
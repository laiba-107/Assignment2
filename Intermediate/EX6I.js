function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log("Are 'listen' and 'silent' anagrams?", isAnagram("listen", "silent"));  // true
<script src="EX7I.js">Next</script>
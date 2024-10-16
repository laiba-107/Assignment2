function isSubstring(mainStr, subStr) {
    return mainStr.includes(subStr);
}

console.log("Is 'world' in 'Hello world'?", isSubstring("Hello world", "world"));  // true

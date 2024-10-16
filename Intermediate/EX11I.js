function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log("Capitalized sentence:", capitalizeWords("hello world, how are you?"));  // "Hello World, How Are You?"
<script src="EX12I.js">Next</script>
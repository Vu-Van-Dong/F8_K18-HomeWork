// Lesson 3: Even/Odd Check
// Write a single line of code using the ternary operator to check variable n. If n is even, return the string "Even", otherwise return "Odd".

function isEvenNumber(n) {
		return n % 2 === 0
}

// Example usage
let n = 8

let result = isEvenNumber(n) ? "Even" : "Odd"
console.log(result)

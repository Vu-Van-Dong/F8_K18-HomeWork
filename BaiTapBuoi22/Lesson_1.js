//Lesson 1: Academic Performance Classification
// 	Write a function that takes a student's score (0-10) as input and prints the classification:
// 	9 - 10: Excellent
// 	8 - under 9: Very Good
// 	6.5 - under 8: Good
// 	5 - under 6.5: Average
// 	Under 5: Weak
// 	Requirement: Check if the entered score is valid (0-10) before evaluating.
//
function classifyScore(score) {
		if (score < 0 || score > 10) {
				return "Invalid score"
		} else if (score >= 9) {
				return "Excellent"
		} else if (score >= 8) {
				return "Very Good"
		} else if (score >= 6.5) {
				return "Good"
		} else if (score >= 5) {
				return "Average"
		} else {
				return "Weak"
		}
}

// Example
console.log(classifyScore(10))



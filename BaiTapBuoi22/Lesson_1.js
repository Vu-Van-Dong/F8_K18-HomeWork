//Lesson 1: Academic Performance Classification
// 	Write a function that takes a student's score (0-10) as input and prints the classification:
// 	9 - 10: Excellent
// 	8 - under 9: Very Good
// 	6.5 - under 8: Good
// 	5 - under 6.5: Average
// 	Under 5: Weak
// 	Requirement: Check if the entered score is valid (0-10) before evaluating.
//

let score = 10

if (score <= 10 && score >=9) {
		console.log("Xuat sac")
} else  if (score >= 8 && score <=9) {
		console.log("rat tot")
}else if (score >= 6.5 && score <=8) {
		console.log("Tot")
}else if (score >= 5 && score <=6.5) {
		console.log("Trung binh")
}else if (score < 5) {
		console.log("yeu")
}else {
		console.log("So diem khong hop le")
}


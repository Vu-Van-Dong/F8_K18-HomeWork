//Lesson 2: Days in a Month Calculator
// 	Using a switch case, write a function that takes a month number (1-12) as input. Print how many days are in that month.
//
// 	Hint: Months 1, 3, 5, 7, 8, 10, 12 have 31 daysLesson 2: Days in a Month Calculator
// 	Using a switch case, write a function that takes a month number (1-12) as input. Print how many days are in that month.
//
// 	Hint: Months 1, 3, 5, 7, 8, 10, 12 have 31 days. Months 4, 6, 9, 11 have 30 days. Month 2 has 28 or 29 days (temporarily calculate as 28 days).																					. Months 4, 6, 9, 11 have 30 days. Month 2 has 28 or 29 days (temporarily calculate as 28 days).

let month =12
function  daysMonth(month){
		switch(month){
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
						console.log("thang " + month + " co 31 ngay")
						break
				
				case 4:
				case 6:
				case 9:
				case 11:
						console.log("Thang  "  + month +   " co 30 ngay")
						break
				
				case 2:
						console.log("Thang 2 co 28 ngay")
						break
				
				default:
						console.log("Thang khong hop le (1-12)")
		}
		
		
		
		
}

daysMonth(month)






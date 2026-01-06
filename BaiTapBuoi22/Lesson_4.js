
//Lesson 4: Movie Ticket Price Calculation
// 	A cinema has a base ticket price of 100k.
// 	If it's a child (under 13 years old), the ticket price is reduced by 50%.
// 	Otherwise, the price remains 100k.
//
// 	Requirement: Use the ternary operator to assign the value to the ticketPrice variable.

function getTicketPrice(age) {
		return age < 13 ? 50000 : 100000
}

// Example
console.log(getTicketPrice(11))




function isPerfectSquare(b) {
		if (b < 0) return "not a perfect square";
		
		const c = b**0.5;
		if (Number.isInteger(c)) {
				return "is a perfect square";
		} else {
				return "not a perfect square";
		}
}

console.log(isPerfectSquare(5));  // not a perfect square
console.log(isPerfectSquare(9));  // is a perfect square

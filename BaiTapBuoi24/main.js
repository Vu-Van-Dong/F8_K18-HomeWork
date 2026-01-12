
//Ex1

function isPrime(n) {
		if (typeof n !== "number" || n <= 1) {
				return false
		}
		for (let i = 2; i <= n; ++i) {
				if (n % i === 0) {
						return false
				}
		}
		return true
}

console.log(isPrime(2.5))
console.log(isPrime(10))



// ex02

function isPerfectNumber(n){
		let sum =0
		if (typeof n !== "number" || n <= 1) {
				return false
		}
		for (let i = 1; i < n; ++i) {
				if (n % i === 0) {
						sum= sum +i
				}
		}
		return sum===n

}

console.log(isPerfectNumber(6))




















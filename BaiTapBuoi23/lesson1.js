


function checkTriangle(a, b, c){
		if (a + b <=c || a +c <=  b || b +c <=a){
				return "not a trangle"
		}else if (a===b && b ===c){
				return "Equilateral triangle"
		}else if (a*a === b*b + c*c || b*b === a*a +c*c || c*c ===b*b +a*a){
				return "Right triangle"
		
		}else if(a ===b || b ===c || a ===c){
				return "Isosceles triangle"
		}else {
				return "Scalene triangle"
		}
}


console.log(checkTriangle(3, 4, 5)); // Right triangle
console.log(checkTriangle(2, 2, 2)); // Equilateral triangle
console.log(checkTriangle(2, 2, 3)); // Isosceles triangle
console.log(checkTriangle(2, 3, 4)); // Scalene triangle
console.log(checkTriangle(1, 2, 3)); // Not a triangle













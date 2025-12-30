






let name='Dong'
const age=21
let isStudent =true

console.log(name)
console.log(age)
console.log(isStudent)



let a = 5
a = 10
let b = 10
b = 5
console.log(a, b)



// 	How is const different from let?		: const differs from let in the most basic way that const declares that variable once and cannot be changed
//                                 VD : const c = 2
//                                      c = 3    (The code will be error and invalid )
//                                  VD với let :let b = 10
//                                      b = 5 (valid, the code runs normally and receives a value of 5 )
// 	When should const be used?         : You should use cosnt when the variable is a constant and cannot be changed, for example, the sum of pi = 3.1416......


//🟡 Past 3: Data type
// 	Xác định kiểu dữ liệu của các giá trị sau (ghi comment):
// 		100
// 		100
// 		TRUE
// 		[1, 2, 3]
// 		{ name: "An", age: 20 }
// 		null
// 		undefined
//
// 	Tạo một object student gồm:
// 		name
// 		age
// 		scores (array gồm 3 số)
//
// 		In object này ra console.


// Tạo object student
// let student = {
//     name: "An",
//     age: 20,
//     scores: [8, 7.5, 9]
// };
//
// // In ra console
// console.log(student);

// Xác định kiểu dữ liệu

// 100 → number
// 100 → number
// true → boolean
// [1, 2, 3] → object (array)
// { name: "An", age: 20 } → object
// null → object
// undefined → undefined

// Tạo object student
let student = {
    name: "An",
    age: 20,
    scores: [8, 7.5, 9]
};

// In ra console
console.log(student);
















//	past 4 	TYpe casting
// The following code is correct or incorrect? Explain:
// 	"const x = 10;
// x = 20;"
// Answer: The above code is wrong because as pointed out in the difference between const and let above, const only receives 1 value that is initialized to the initial variable so it will not be received when assigning the value.


// "1000" → number
const names = "1000"
console.log(typeof Number(names), names)

let e = 10000
console.log( typeof String(e),e)

const isTrue = true
console.log(typeof String(isTrue), isTrue)







// Part 5
//	Predict the result (true / false):
// 		Boolean(0)	           : -> false
// 		Boolean(1)             : -> True
// 		Boolean("")             : -> false
// 		Boolean("hello")        : -> True
// 		Boolean(null)           : -> False
// 		Boolean([])             : ->True


//🔵 Part 6: Array & memory (contact RAM diagram)
// 		const numbers = [4, 3, 1, 5, 1]
        const numbers = [4, 3, 1, 5, 1]
        console.log(numbers[4])

// 	    Theoretical basis: in computer architecture, RAM contains many memory cells. When initialized, each element occupies 1 memory cell, each array will similarly occupy an array of memory cells including n memory cells for n words, the numbering of the array's memory cells starts from 0 and ends with element n at position n-1.

// 		Print the first element	:console.log(numbers[0])
// 		Print the last element   : console.log(numbers[4])
//
// 	Verbal explanation (no code needed):
// 		Why when assigning:
// 			const a = numbers;
//
// 		So a and numbers are related to the same memory area?
//   Explanation: according to the theoretical basis of the above sections, when assigning const a = number, it means that a and number are a fixed element due to the use of const, sharing the same memory area, a = number and number = a, so a and number are always 1 and cannot be changed.



















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


// Trả lời bằng comment trong code:
// 	const khác let ở điểm nào?		: const khác  let ở điểm cơ bản nhất là  const  khai báo cho biến đó 1 lần và không thể thay đổi
//                                 VD : const c = 2
//                                      c = 3    (code sẽ lỗi , không hợp lệ )
//                                  VD với let :let b = 10
//                                      b = 5 (hợp lệ , code chạy bình thường và nhận giá trị bằng 5 )
// 	Khi nào nên dùng const?         : nên dùng cosnt khi biến đó là 1 hằng số và không thể thay đổi ví dụ như tong toán pi = 3.1416......



// Đoạn code sau đúng hay sai? Giải thích:
// 	"const x = 10;
// x = 20;"
// trả lời : đoạn code trên là sai vì như đã chỉ ra ở diểm khá nhau giữa const và let ở trên, const chỉ nhận 1 giá trị được khởi tạo biến ban đầu nên sẽ không nhận khi gán giá trị.


let c = '10000'
console.log(Number(c))

let d = 10000
console.log(String(d))

let e = true
console.log(String(e))





//	Dự đoán kết quả (true / false):
// 		Boolean(0)	           : -> false
// 		Boolean(1)             : -> True
// 		Boolean("")             : -> false
// 		Boolean("hello")        : -> True
// 		Boolean(null)           : -> False
// 		Boolean([])             : ->True


//🔵 Phần 6: Array & bộ nhớ (liên hệ sơ đồ RAM)
// 	Cho mảng:
// 		const numbers = [4, 3, 1, 5, 1];
const numbers = [4, 3, 1, 5, 1]
console.log(numbers[4])

// 	    Cơ dở lý thuyết: trong kiến trúc máy tính , trên Ram chứa rất nhiều ô nhớ, khi khởi tạo mỗi phần tử chiếm 1 ô nhớ mỗi mảng cũng sẽ tương tự sẽ chiếm 1 mảng ô nhớ gồm n ô nhớ cho n phần từ , số thứ tự được đánh số cho các ô nhớ của mảng bắt đàu từ 0 và kết thúc cho phần tử n là vị trí n-1.

// 		In phần tử đầu tiên		:console.log(numbers[0])
// 		In phần tử cuối cùng    : console.log(numbers[4])
//
// 	Giải thích bằng lời (không cần code):
// 		Vì sao khi gán:
// 			const a = numbers;
//
// 		thì a và numbers lại liên quan đến cùng một vùng nhớ?
//   Giải thích : như cơ sở lý thuyết các phần trên , khi gán const a = number thì tức là a và number đang là 1 phần tử cố định do ddùng const, dùng chung 1 vùng nhớ , a = number và number =a , nên avà number luôn luôn là 1 và không thể thay đổi.



















//
// let classA = [
// 		'An',
// 		'binh',
// 		'Chi'
// ]
//
// let classB = classA
// classB[0] = 'An update '
//
// console.log(classA)


//Task 1:
//Khi bạn khai báo let classA = ["An", "Binh", "Chi"], máy tính không lưu trực tiếp danh sách tên vào biến classA. Thay vào đó: nó tạo ra 1 vùng nhớ để chứa các dữ liệu .
// Biến Class sẽ được lưu ở đó , Khi gán classB = ClassA thì cũng có nghĩa là classB đang dùng chung vùng nhớ với classA hay nói cachs khác ClassB chính là classA .
// Vì vậy khi thay đổi biến classB[0] = 'An update ' thì biến classA[0] cũng thay đổi thành 'An update' vì đang có chung vùng nhớ.Tại đây dữ liễu cũ sẽ bị thay thế bằng dữ liệu mới. -> hiển thị lên là 'An update'





// task 2
//
// let x = "10";
// let y = 2;
//
// console.log(x + y);      // Kết quả 1
// console.log(x - y);      // Kết quả 2
// console.log(x * "3");    // Kết quả 3
// console.log("Hello" - y);// Kết quả 4

// Phép cộng: khi cộng gặp 1 chuỗi nó sẽ ưu tiên  ép kiểu đưa về chuỗi rồi thực hiện tính toán.Do vậy 2 sẽ được chuyển về "2" và kết quả sẽ là "10" +"2" = "102"

// phép trừ: trong phép trừ Js ưu tiên ép kiểu về số. Do vậy "10" sẽ được chuyển về số 10 và kết quả la 10-2=8
//NaN: là viết tắt của Not a Number. Đại diện cho kết quả toán học không hợp lệ
//Phép nhân :Nó sẽ ép kiểu về số để thực hiện phép nhân .Do đó "10" chuyển thành số 10, "3" chuyển về số 3 để thực hiện phép nhân nên kết quả 10*3 =30

// Phép chia: trong phép chia ưu tiên ép kiểu về số để thực hiện phép chia ,do đó "hello" sẽ bị ép kiểu về số nhưng trong chuỗi "hello" không thể ép vê số nên khi thực hiện phép chia không thành công nên trả về kết quả NaN

//Task 3:
// Thay đổi giá trị các biến này để test từng trường hợp
// let age = 9;
// let mathScore = 10;
// // let isVIP = false;
//
// let isVIP = true;
//
// // Logic tính toán
// // Điều kiện 1: (age >= 10 && mathScore > 7)
// let canEnter = (age >= 10 && mathScore > 7) || isVIP;
//
// console.log(canEnter);


//Có, chúng hoàn toàn giống nhau.
//age < 10: Nghĩa là các số nhỏ hơn 10 (ví dụ: 9, 8, ...).
// !(age < 10): Nghĩa là KHÔNG nhỏ hơn 10.




//Task 4:

const laptop = {
		brand: "Dell",
		price: 1000,
		spec: { ram: "8GB", ssd: "256GB" }
};

const myLaptop = laptop
myLaptop.brand = "Apple"

const mySpec = laptop.spec
mySpec.ram = "16GB"
console.log(laptop.brand)
console.log(laptop.spec.ram)

//   Prediction: laptop.brand -> Apple: When declaring and allocating the laptop array using the const function, because it's an array, the elements inside are still replaceable and not fixed like elements such as Number or String. When declaring a laptop, it is allocated to a location in memory; each element within the array is divided into a memory address region and the memory region of the laptop array.
// When declaring and assigning `myLaptop = laptop`, it means `myLaptop` and `laptop` share the same memory location. Therefore, when assigning `myLaptop.brand = "Apple";`, the memory location value of `mySpec` changes to `Apple`. Since `myLaptop = laptop`, the value of `myLaptop.brand = Laptop.brand`, the value of `Laptop.brand` also changes to `Apple`.





//   Prediction: laptop.spec.ram -> 16GB. Similarly to the above, when declaring and assigning mySpec = laptop.spec, mySpec and laptop.spec share the same memory unit. Therefore, when assigning mySpec.ram = "16GB", the value of laptop.spec.ram will also change to "16GB".















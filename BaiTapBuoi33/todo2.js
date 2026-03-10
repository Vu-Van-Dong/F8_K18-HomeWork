// 1. Kiểm tra tồn kho
function getProduct(productId) {
		
		return new Promise(function (resolve, reject) {
				
				console.log("Kiem tra ton kho...")
				
				setTimeout(function () {
						
						if (productId === 1) {
								
								const product = {
										productId: 1,
										name: "iPhone",
										price: 20000000,
										stock: 5
								}
								
								console.log("Ton kho khong hop le!")
								
								resolve(product)
								
						} else {
								
								reject("San pham khong ton tai!")
								
						}
						
				}, 1000)
				
		})
		
}


// 2. Thanh toán
function processPayment(product) {
		
		return new Promise(function (resolve, reject) {
				
				console.log("Dang thanh toan...")
				
				setTimeout(function () {
						
						if (product.stock > 0) {
								
								console.log("Thanh toan thanh cong")
								
								resolve(product)
								
						} else {
								
								reject("Het hang")
								
						}
						
				}, 1500)
				
		})
		
}


// 3. Tạo đơn hàng
function createOrder(product) {
		
		return new Promise(function (resolve) {
				
				console.log("Dang tao đon hang...")
				
				setTimeout(function () {
						
						const order = {
								orderId: 999,
								productName: product.name,
								status: "SUCCESS"
						}
						
						resolve(order)
						
				}, 1000)
				
		})
		
}



//sự kiện click
const orderBtn = document.getElementById("orderBtn")

orderBtn.addEventListener("click", function () {
		
		getProduct(1)
		
		.then(function (product) {
				return processPayment(product)
		})
		
		.then(function (product) {
				return createOrder(product)
		})
		
		.then(function (order) {
				
				console.log("Đặt hàng thành công!")
				console.log("Order:", order)
				
		})
		
		.catch(function (error) {
				
				console.log("Lỗi:", error)
				
		})
		
})
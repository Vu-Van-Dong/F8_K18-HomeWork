// 1. Kiểm tra tồn kho
function getProduct(productId) {
		
		return new Promise(function (resolve, reject) {
				
				console.log("Kiểm tra tồn kho...")
				
				setTimeout(function () {
						
						if (productId === 1) {
								
								const product = {
										productId: 1,
										name: "iPhone",
										price: 20000000,
										stock: 5
								}
								
								console.log("Tồn kho hợp lệ")
								
								resolve(product)
								
						} else {
								
								reject("Sản phẩm không tồn tại")
								
						}
						
				}, 1000)
				
		})
		
}


// 2. Thanh toán
function processPayment(product) {
		
		return new Promise(function (resolve, reject) {
				
				console.log("Đang thanh toán...")
				
				setTimeout(function () {
						
						if (product.stock > 0) {
								
								console.log("Thanh toán thành công")
								
								resolve(product)
								
						} else {
								
								reject("Hết hàng")
								
						}
						
				}, 1500)
				
		})
		
}


// 3. Tạo đơn hàng
function createOrder(product) {
		
		return new Promise(function (resolve) {
				
				console.log("Đang tạo đơn hàng...")
				
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
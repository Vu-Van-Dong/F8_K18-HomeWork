// lấy giỏ hàng
function getCart() {
		const cart = sessionStorage.getItem("cart");
		return cart ? JSON.parse(cart) : [];
}

// lưu giỏ hàng
function saveCart(cart) {
		sessionStorage.setItem("cart", JSON.stringify(cart));
}

// render UI
function renderCart() {
		const cart = getCart();
		
		cartList.innerHTML = "";
		
		cart.forEach((item) => {
				const li = document.createElement("li");
				li.textContent = item;
				cartList.appendChild(li);
		});
		
		total.textContent = "Số lượng: " + cart.length;
}

// thêm sản phẩm
function addToCart(product) {
		const cart = getCart();
		cart.push(product);
		saveCart(cart);
		renderCart();
}

// xóa giỏ
function clearCart() {
		sessionStorage.removeItem("cart");
		renderCart();
}

// load trang
renderCart();
/***********************
 * DATA
 ***********************/
const products = [
		{ id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
		{ id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
		{ id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
		{ id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
		{ id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

const orders = [];
let orderAutoId = 1;

/***********************
 * CREATE ORDER
 *
 * Viết hàm createOrder(productId, orderQuantity)
 * - Order id automatically increases (starting from 1)
 * - productId, orderQuantity must be different from null
 * - if productId does not exist -> throws error "Product not found"
 * - reduce product.remaining by orderQuantity
 ***********************/
function createOrder(productId, orderQuantity) {
		if (productId == null || orderQuantity == null) {
				throw new Error("productId and orderQuantity are required");
		}
		
		const product = products.find(p => p.id === productId);
		if (!product) {
				throw new Error("Product not found");
		}
		
		if (orderQuantity > product.remaining) {
				console.log("out of stock");
				return;
		}
		
		product.remaining -= orderQuantity;
		
		const order = {
				id: orderAutoId++,
				productId,
				quantity: orderQuantity
		};
		
		orders.push(order);
		return order;
}

/***********************
 * UPDATE ORDER
 *
 * Viết hàm updateOrder(orderId, quantity)
 * - If the remaining product is not enough -> log error "out of stock"
 * - The difference between new and old remaining
 * - If the quantity is increased but the warehouse is not enough -> log error "out of stock"
 ***********************/
function updateOrder(orderId, quantity) {
		const order = orders.find(o => o.id === orderId);
		if (!order) {
				throw new Error("Order not found");
		}
		
		const product = products.find(p => p.id === order.productId);
		
		const diff = quantity - order.quantity;
		
		if (diff > 0) {
				if (diff > product.remaining) {
						console.log("out of stock");
						return;
				}
				product.remaining -= diff;
		} else {
				product.remaining += Math.abs(diff);
		}
		
		order.quantity = quantity;
}

/***********************
 * DELETE ORDER
 *
 *  deleteOrder(orderId)
 
 ***********************/
function deleteOrder(orderId) {
		const index = orders.findIndex(o => o.id === orderId);  //if orderId does not exist -> throws "not found" error
		if (index === -1) {
				throw new Error("not found");
		}
		//Successful deletion -> refund of product quantity to product.remaining
		const order = orders[index];
		const product = products.find(p => p.id === order.productId);
		
		product.remaining += order.quantity;
		orders.splice(index, 1);
}

/***********************
 * TEST
 ***********************/
console.log("create ");
createOrder(1, 5);
createOrder(2, 3);
console.log(products);
console.log(orders);

console.log("update");
updateOrder(1, 8);
console.log(products);
console.log(orders);

console.log("Delete");
deleteOrder(1);
console.log(products);
console.log(orders);

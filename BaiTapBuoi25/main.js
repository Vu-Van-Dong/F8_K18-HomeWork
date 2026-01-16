const products = [
		{ id: 1, name: 'iPhone', price: 2000 },
		{ id: 2, name: 'Samsung', price: 1500 },
		{ id: 3, name: 'Xiaomi', price: 1000 },
		{ id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
		{
				id: 1,
				items: [
						{ productId: 1, quantity: 2 },
						{ productId: 2, quantity: 1 }
				]
		},
		{
				id: 2,
				items: [
						{ productId: 1, quantity: 1 },
						{ productId: 3, quantity: 3 }
				]
		},
		{
				id: 3,
				items: [
						{ productId: 2, quantity: 2 },
						{ productId: 4, quantity: 1 }
				]
		}
]


function getHighestRevenueProduct() {
		let highestRevenue = 0
		let productNumOne = ''
		
		
		for (const order of orders) {
				for (const item of order.items) {
						const index = item.productId - 1   //Get the index of the product in the products array index ===0
						
						if (products[index].revenue === undefined) {
								products[index].revenue = 0;            //Initial revenue creation = 0
						}
						products[index].revenue += products[index].price * item.quantity   // Revenue = product price * quantity sold
				}
		}
		
		
		for (const product of products) {
				if (product.revenue > highestRevenue) {
						highestRevenue = product.revenue    // Update the highest revenue
						productNumOne = product.name        // Save the name of the product with the highest revenue
				}
		}
		
		return productNumOne
}

console.log(getHighestRevenueProduct())



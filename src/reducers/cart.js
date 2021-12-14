
const updateCartItems = (cartItems, item, idx) => {

	if (item.count === 0) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1)
		]
	}

	if (idx === -1) {
		return [
			...cartItems,
			item
		]
	}

	return [
		...cartItems.slice(0, idx),
		item,
		...cartItems.slice(idx + 1)
	]

}

const updateCartItem = (product, item = {}, quantity) => {

	const {
		id = product.id,
		image = product.image,
		name = product.name,
		count = 0,
		price = 0 } = item;

	return {
		id,
		image,
		name,
		count: count + quantity,
		price: price + quantity * product.price
	}
}

let newTotalPrice = 0, newTotalQuantity = 0;

const updateOrder = (state, productId, quantity) => {
	const { productList: { products }, cart: { cartItems } } = state;
	let newItem, myProduct;

	Object.values(products).map((items) => {
		return (
			Object.values(items).map((item) => {
				if (typeof item === 'object') {
					return (
						Object.values(item).find((product) => {
							if (product.id === productId) {
								myProduct = product;
							}
						}
						)
					)
				}
			})
		)
	})

	const itemIndex = cartItems.findIndex(({ id }) => id === productId);
	const item = cartItems[itemIndex];
	newItem = updateCartItem(myProduct, item, quantity);

	const updateTotalPrice = (newItem, quantity) => {

		if (newItem.count === 0) {
			return newTotalPrice += myProduct.price * quantity;
		}
		else {
			return newTotalPrice += newItem.price / newItem.count * quantity;
		}
	}

	const updateTotalQuantity = (quantity) => {

		return newTotalQuantity += quantity;

	}

	return {
		cartItems: updateCartItems(cartItems, newItem, itemIndex),
		totalPrice: updateTotalPrice(newItem, quantity),
		totalQuantity: updateTotalQuantity(quantity)
	}

}

const updateCart = (state, action) => {

	if (state === undefined) {
		return {
			cartItems: [],
			totalPrice: 0,
			totalQuantity: 0

		}
	}

	switch (action.type) {
		case 'PRODUCT_ADDED_TO_CART':
			return updateOrder(state, action.payload, 1)

		case 'PRODUCT_REMOVED_FROM_CART':
			return updateOrder(state, action.payload, -1);

		case 'ALL_PRODUCT_REMOVED_FROM_CART':
			const item = state.cart.cartItems.find(({ id }) => id === action.payload)
			return updateOrder(state, action.payload, -item.count)

		// case 'ORDER_SEND':
		// 	return sendOrder();

		default:
			return state.cart
	}
}

export default updateCart;

const productsLoaded = (newProducts) => {
	return {
		type: 'FETCH_PRODUCTS_SUCCESS',
		payload: newProducts
	}
}

const productsRequested = () => {
	return {
		type: 'FETCH_PRODUCTS_REQUEST'
	}
}

const productsError = (error) => {
	return {
		type: 'FETCH_PRODUCTS_FAILURE',
		payload: error
	}
}

const productAddedToCart = (productId) => {
	return {
		type: 'PRODUCT_ADDED_TO_CART',
		payload: productId
	}
}

const productRemovedFromCart = (productId) => {
	return {
		type: 'PRODUCT_REMOVED_FROM_CART',
		payload: productId
	}
}

const allProductRemovedFromCart = (productId) => {
	return {
		type: 'ALL_PRODUCT_REMOVED_FROM_CART',
		payload: productId
	}
}

const onFilterChange = (filter) => {
	return {
		type: 'PRODUCTS_FILTERED',
		payload: filter
	}
}

export {
	productsLoaded,
	productsRequested,
	productsError,
	productAddedToCart,
	productRemovedFromCart,
	allProductRemovedFromCart,
	onFilterChange
}
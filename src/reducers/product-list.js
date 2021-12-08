
const updateProductList = (state, action) => {

	if (state === undefined) {
		return {
			products: {},
			loading: false,
			error: null,
			filter: 'all'
		}
	}

	switch (action.type) {
		case 'FETCH_PRODUCTS_REQUEST':
			return {
				...state.productList,
				loading: true
			}

		case 'FETCH_PRODUCTS_SUCCESS':
			return {
				...state.productList,
				loading: false,
				products: action.payload
			}

		case 'FETCH_PRODUCTS_FAILURE':
			return {
				...state.productList,
				error: action.payload
			}
		case 'PRODUCTS_FILTERED':
			return {
				...state.productList,
				filter: action.payload
			}

		default:
			return state.productList
	}
}

export default updateProductList;
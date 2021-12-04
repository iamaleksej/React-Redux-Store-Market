
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
				...state,
				loading: true
			}

		case 'FETCH_PRODUCTS_SUCCESS':
			return {
				...state,
				loading: false,
				products: action.payload
			}

		case 'FETCH_PRODUCTS_FAILURE':
			return {
				...state,
				error: action.payload
			}
		case 'PRODUCTS_FILTERED':
			return {
				...state,
				filter: action.payload
			}

		default:
			return state.productList
	}
}

export default updateProductList;

import updateProductList from "./product-list";
import updateCart from "./cart";

const reducer = (state, action) => {

	return {
		productList: updateProductList(state, action),
		cart: updateCart(state, action)
	}
}

export default reducer;
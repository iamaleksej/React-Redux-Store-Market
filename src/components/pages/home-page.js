import React from 'react';
import ProductListContainer from '../product-list';
import FilterButtons from "../filter-buttons"

const HomePage = () => {

	return (
		<>
			<FilterButtons />
			<ProductListContainer />
		</>
	)
}

export default HomePage;
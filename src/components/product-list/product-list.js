import React, { Component } from 'react';
import ProductListItem from '../product-list-item/product-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import { withStoreService } from '../hoc'
import { productsLoaded, productsRequested, productsError, productAddedToCart } from "../../actions";
import { connect } from "react-redux";
import { compose } from '../../utils'

import './product-list.sass'

// const ProductList = ({ products, onAddedToCart }) => {
// 	return (
// 		<>
// 			{Object.values(products).map((items) => {
// 				return (
// 					<div className="product-list_wrapper">
// 						<h2 className="product-list__title">{items.title}</h2>
// 						<>
// 							{Object.values(items).map((item) => {
// 								if (typeof item === 'object') {
// 									return (
// 										<ul className="product-list">
// 											{Object.values(item).map((product) => {
// 												console.log(product)
// 												return (
// 													<li key={product.id}>
// 														<ProductListItem
// 															product={product}
// 															onAddedToCart={() => onAddedToCart(product.id)} />
// 													</li>
// 												)
// 											})}
// 										</ul>
// 									)
// 								}
// 							})}
// 						</>
// 					</div>
// 				)
// 			})
// 			}
// 		</>
// 	)
// }

const ProductList = ({ filter, visibleAllItems, visibleFilterItems }) => {

	switch (filter) {
		case 'burgers':
			return (
				<>
					{visibleFilterItems}
				</>
			)
		case 'drinks':
			return (
				<>
					{visibleFilterItems}
				</>
			)
		case 'salads':
			return (
				<>
					{visibleFilterItems}
				</>
			)
		case 'sauces':
			return (
				<>
					{visibleFilterItems}
				</>
			)
		case 'snacks':
			return (
				<>
					{visibleFilterItems}
				</>
			)
		default:
			return (
				<>
					{visibleAllItems}
				</>
			)
	}
}

class ProductListContainer extends Component {

	componentDidMount() {
		// получение данных
		const {
			storeService,
			productsLoaded,
			productsRequested } = this.props;

		productsRequested();
		storeService.getProducts(productsLoaded);
		productsError();
	}



	render() {

		const {
			products,
			loading,
			error,
			onAddedToCart,
			filter } = this.props;

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}
		console.log(products)
		console.log(typeof products)
		console.log(filter)

		const visibleFilterItems = Object.values(products).map((items) => {

			if (items.category === filter) {
				return (
					<div className="product-list_wrapper">
						<h2 className="product-list__title">{items.title}</h2>
						<>
							{Object.values(items).map((item) => {
								if (typeof item === 'object') {
									return (
										<ul className="product-list">
											{Object.values(item).map((product) => {
												return (
													<li key={product.id}>
														<ProductListItem
															product={product}
															onAddedToCart={() => onAddedToCart(product.id)} />
													</li>
												)
											})}
										</ul>
									)
								}
							})}
						</>
					</div>
				)
			}
		})


		const visibleAllItems = Object.values(products).map((items) => {
			return (
				<div className="product-list_wrapper">
					<h2 className="product-list__title">{items.title}</h2>
					<>
						{Object.values(items).map((item) => {
							if (typeof item === 'object') {
								return (
									<ul className="product-list">
										{Object.values(item).map((product) => {
											// console.log(product)
											return (
												<li key={product.id}>
													<ProductListItem
														product={product}
														onAddedToCart={() => onAddedToCart(product.id)} />
												</li>
											)
										})}
									</ul>
								)
							}
						})}
					</>
				</div>
			)
		})


		return <ProductList
			products={products}
			filter={filter}
			visibleAllItems={visibleAllItems}
			visibleFilterItems={visibleFilterItems}
			onAddedToCart={onAddedToCart} />
	}
}

const onAddedToCart = (id) => {
	return productAddedToCart(id)
}

const mapStateToProps = ({ productList: { products, loading, error, filter } }) => {
	return { products, loading, error, filter }
}

const mapDispatchToProps = {
	productsLoaded,
	productsRequested,
	productsError,
	onAddedToCart

}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer);

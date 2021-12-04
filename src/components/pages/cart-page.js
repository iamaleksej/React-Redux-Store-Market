import React from 'react';
import { connect } from 'react-redux';
import {
	productAddedToCart,
	productRemovedFromCart,
	allProductRemovedFromCart
} from '../../actions';
import './cart-page.sass'

const CartPage = ({ total, items, onIncrease, onDecrease, onDelete }) => {

	const renderRow = (item) => {

		const { id, image, name, count, price } = item;
		return (
			<div className="cart-products__item">
				<div className="cart-products__image">
					<img className="image" src={image} alt={name} />
				</div>
				<div className="cart-products__remove"
					onClick={() => onDelete(id)}>×</div>
				<div className="cart-products__name">{name}</div>
				<div className="cart-products__counter">
					<div className="cart-products__counter-less"
						onClick={() => onDecrease(id)}>
						–
					</div>
					<div className="cart-products__counter-number">{count}</div>
					<div className="cart-products__counter-more"
						onClick={() => onIncrease(id)}>
						+
					</div>
				</div>
				<div className="cart-products__price">{price}<sup className="cart-products__ruble">₽</sup></div>
			</div>
		)
	}

	return (
		<div className="cart">
			<h1 className="cart__title">Корзина</h1>
			<h2 className="cart__subtitle">
				{items.length ? 'Ваш заказ' : 'Ваша корзина пуста'}
			</h2>
			<div className="cart-products">
				{Object.values(items).map(renderRow)}
			</div>
			{/* <h2>Стоимость: {total}</h2> */}
		</div >

	)
}

const mapStateToProps = ({ cart: { cartItems, orderTotal } }) => {
	return {
		items: cartItems,
		total: orderTotal
	}
}

const mapDispatchToProps = {
	onIncrease: productAddedToCart,
	onDecrease: productRemovedFromCart,
	onDelete: allProductRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
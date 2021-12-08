import React from 'react';
import { connect } from 'react-redux';
import {
	productAddedToCart,
	productRemovedFromCart,
	allProductRemovedFromCart
} from '../../actions';
import './cart-page.sass'

const CartPage = ({ totalPrice, cartItems, onIncrease, onDecrease, onDelete }) => {

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
				{cartItems.length ? 'Ваш заказ' : 'Ваша корзина пуста'}
			</h2>
			<div className="cart-products">
				{Object.values(cartItems).map(renderRow)}
			</div>
			{console.log(totalPrice)}
			<h2 className="cart__subtitle mt50px">
				Общая стоимость: <span className="fw600 text_orange"> {totalPrice} </span> <span className="fw300">&#8381;</span>
			</h2>
		</div >


	)
}

const mapStateToProps = ({ cart: { cartItems, totalPrice } }) => {
	return {
		cartItems,
		totalPrice
	}
}

const mapDispatchToProps = {
	onIncrease: productAddedToCart,
	onDecrease: productRemovedFromCart,
	onDelete: allProductRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	productAddedToCart,
	productRemovedFromCart,
	allProductRemovedFromCart
} from '../../actions';
import { withStoreService } from '../hoc';
import { compose } from '../../utils';
// import storeService from '../../services/store-service';
// import firebase from 'firebase/compat/app';
// import { getDatabase } from 'firebase/compat/database';
import './cart-page.sass'

const CartPage = ({
	totalPrice,
	cartItems,
	onIncrease,
	onDecrease,
	onDelete,
	storeService }) => {


	const [clientData, setClientData] = useState({
		clientName: null,
		clientAdress: null,
		clientPhone: null
	});

	const handleChange = ({ target: { value, id } }) => {
		setClientData((clientData) => ({
			...clientData,
			[id]: value
		}))
	}

	const sendClientData = async () => {
		try {
			await storeService.setOrderData(clientData, cartItems, totalPrice);
		}
		catch (error) {
			console.log(error)
		}
	}




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

		<div className="cart" >
			<h1 className="cart__title">Корзина</h1>
			<h2 className="cart__subtitle">
				{cartItems.length ? 'Ваш заказ' : 'Ваша корзина пуста'}
			</h2>
			<div className="cart-products">
				{Object.values(cartItems).map(renderRow)}
			</div>
			<h2 className="cart__subtitle mt50px">
				Общая стоимость: <span className="fw600 text_orange"> {totalPrice} </span> <span className="fw300">&#8381;</span>
			</h2>
			<div className="client-data">
				<input
					type="text"
					id="clientName"
					placeholder="Имя"
					className="client-data__item client-data__name"
					onChange={handleChange} />
				<input
					type="text"
					id="clientAdress"
					placeholder="Адрес"
					className="client-data__item client-data__adress"
					onChange={handleChange} />
				<input
					type="phone"
					id="clientPhone"
					placeholder="Телефон"
					className="client-data__item client-data__phone"
					onChange={handleChange} />
				<p className="client-data__price">Стоимость заказа: {totalPrice} &#8381;</p>
				<button type="submit"
					className="client-data__btn-sumbit"
					onClick={sendClientData}>
					Отправить заказ
				</button>
			</div>
		</div >


	)
}

const mapStateToProps = ({
	cart: {
		cartItems,
		totalPrice } }) => {

	return {
		cartItems,
		totalPrice

	}
}

const mapDispatchToProps = {
	onIncrease: productAddedToCart,
	onDecrease: productRemovedFromCart,
	onDelete: allProductRemovedFromCart,
	// onSendOrder
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(CartPage);
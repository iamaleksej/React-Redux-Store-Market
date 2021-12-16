import React from 'react';
import { connect } from "react-redux";
import { withStoreService } from '../hoc';
import { compose } from '../../utils';
import { Link } from "react-router-dom";
import Login from '../login';
import './shop-header.sass';

const ShopHeader = ({ totalQuantity, totalPrice }) => {



	return (
		<header className="header">
			<div className="header__logo-login">
				<Link to="/" className="header__logo">
					Store Project
				</Link>
				<Login />
			</div>
			<Link to="/cart" className="header__cart">
				<span className="header__cart-numbers"> {totalQuantity} </span>
				( <span className="header__cart-numbers">{totalPrice}</span> &#8381; )
				<div className="header__cart-image">
					<img className="image" src="https://firebasestorage.googleapis.com/v0/b/store-project-de72e.appspot.com/o/store-project%2Fimages%2Fcart-icon.png?alt=media&token=df1d55e1-d77d-47d6-97f1-c9e0dc2a5d09" alt="Корзина:" />
				</div>
			</Link>
		</header>
	)
}

const mapStateToProps = ({ cart: { totalPrice, totalQuantity } }) => {
	return {
		totalPrice,
		totalQuantity
	}
}

export default compose(
	withStoreService(),
	connect(mapStateToProps)
)(ShopHeader)
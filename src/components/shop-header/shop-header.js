import React from 'react';
import './shop-header.sass'
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
	return (
		<header className="header">
			<Link to="/" className="header__logo">
				Store Project
			</Link>

			<Link to="/cart" className="header__cart">
				Корзина: {numItems}. Стоимость: {total}
			</Link>
		</header>
	)
}

export default ShopHeader;
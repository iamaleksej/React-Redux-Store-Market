import React from 'react';
import './product-list-item.sass';

const ProductListItem = ({ product, onAddedToCart }) => {
	const { name, price, image, description } = product;
	return (
		<div className="product-list__item">
			<div className="product-list__image">
				<img className="image" src={image} alt={name} />
			</div>
			<h3 className="product-list__name">{name}</h3>
			<p className="product-list__price">{price}<sup className="product-list__ruble">₽</sup></p>
			<p className="product-list__description">{description}</p>
			<button
				onClick={onAddedToCart}
				className="product-list__btn">
				Добавить
			</button>
		</div>
	)
}

export default ProductListItem;
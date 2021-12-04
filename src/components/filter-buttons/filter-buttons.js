import React from 'react';
import { connect } from "react-redux";
import { onFilterChange } from "../../actions";

import './filter-buttons.sass'


class FilterButtons extends React.Component {

	buttons = [
		{ name: 'all', label: 'Все' },
		{ name: 'burgers', label: 'Бургеры' },
		{ name: 'drinks', label: 'Напитки' },
		{ name: 'salads', label: 'Салаты' },
		{ name: 'sauces', label: 'Соусы' },
		{ name: 'snacks', label: 'Закуски' }
	]

	render() {

		const { filter, onFilterChange } = this.props;

		const buttons = this.buttons.map(({ name, label }) => {

			const isActive = filter === name;
			const classFilterActive = isActive ? 'filter-btn-active' : '';
			return (
				<div className={`filter-buttons__item ${classFilterActive}`}
					key={name}
					onClick={() => onFilterChange(name)}>
					{label}
				</div>
			)
		})

		return (
			<div className="filter-buttons">
				{buttons}
			</div>
		)
	}

}

const mapStateToProps = ({ productList: { filter } }) => {
	return { filter }
}

const mapDispatchToProps = {
	onFilterChange
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(FilterButtons);


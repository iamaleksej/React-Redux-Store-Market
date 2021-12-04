import React from "react";
import { Routes, Route } from "react-router-dom";

// import StoreService from "../../services/store-service";
// import data from "../../services/store-service";
import ShopHeader from "../shop-header";
import FilterButtons from "../filter-buttons"
import { HomePage, CartPage } from "../pages";
import './app.sass';






export default class App extends React.Component {



	render() {
		return (
			<main role="main" className="container">
				<ShopHeader numItems={5} total={210} />
				<FilterButtons />
				<Routes total={210}>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/cart"
						element={<CartPage />}
					/>
				</Routes>
			</main>
		)
	}
}
import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopHeader from "../shop-header";
import { HomePage, CartPage } from "../pages";
import './app.sass';






export default class App extends React.Component {

	render() {
		return (
			<main role="main" className="container">
				<ShopHeader />
				<Routes>
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
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
// import StoreService from "./services/store-service";
import StoreService from "./services/store-service";
import { StoreServiceProvider } from "./components/store-service-context";


import store from "./store";

const storeService = new StoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<StoreServiceProvider value={storeService}>
				<Router>
					<App />
				</Router>
			</StoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('wrapper')
);
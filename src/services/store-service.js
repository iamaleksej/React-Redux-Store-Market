import React from 'react';
import firebase from 'firebase/compat/app';
import { connect } from 'react-redux';
import { getDatabase, ref, set } from "firebase/database";
import 'firebase/compat/database';


const firebaseConfig = {
	apiKey: "AIzaSyClbTF7AS0ZDhMBpwUsZpPGSil-blSQfTw",
	authDomain: "store-project-de72e.firebaseapp.com",
	databaseURL: "https://store-project-de72e-default-rtdb.firebaseio.com",
	projectId: "store-project-de72e",
	storageBucket: "store-project-de72e.appspot.com",
	messagingSenderId: "222931642761",
	appId: "1:222931642761:web:99fbd6db2fa3d800465958"
};

firebase.initializeApp(firebaseConfig);


class storeService {

	constructor() {
		this.firebase = firebase;
		this.database = this.firebase.database();
	}

	getProducts = (CB) => {
		this.database
			.ref('/storeData/')
			.orderByKey()
			.on('value', (snapshot) => {
				CB(snapshot.val())
			})
	}

	getClientData = ({ clientName, clientAdress, clientPhone }) => {
		let userId = 1;
		const { cartItems, totalPrice } = this.props;
		const getDB = getDatabase();
		let refClientData = ref(getDB, 'clientData/order' + userId);

		set(refClientData, {
			clientname: clientName,
			clientphone: clientPhone,
			clientadress: clientAdress,
			totalprice: totalPrice,
			cartitems: cartItems
		})
	}
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

export default
	// storeService;
	connect(mapStateToProps)(storeService);
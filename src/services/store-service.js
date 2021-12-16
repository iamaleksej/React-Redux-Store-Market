import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";
import 'firebase/compat/database';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from "firebase/auth";

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

	setOrderData = ({ clientName, clientAdress, clientPhone }, cartItems, totalPrice) => {
		const getDB = getDatabase();
		set(ref(getDB, 'clientData/order'), {
			clientname: clientName,
			clientphone: clientPhone,
			clientadress: clientAdress,
			totalprice: totalPrice,
			cartitems: cartItems
		})
	}

	setRegData = ({ email, password }) => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
			})
			.catch(error => console.log(error.code))
	}

	setSignInData = ({ email, password }) => {
		const auth = getAuth();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
			})
			.catch(error => console.log(error))
	}
}


export default storeService;
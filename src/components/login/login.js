import React, { useState } from 'react';
import { connect } from "react-redux";
import { compose } from '../../utils';
import { withStoreService } from '../hoc';
import './login.sass'

const Login = ({ storeService }) => {

	const [loginData, setLoginData] = useState({
		email: null,
		password: null
	})
	const [loginBtn, setLoginBtn] = useState(false)
	const [headerLoginBtn, setHeaderLoginBtn] = useState(false)

	const loginHandler = ({ target: { value, id } }) => {
		setLoginData((loginData) => ({
			...loginData,
			[id]: value
		}))
	}

	const sendRegData = async () => {
		try {
			await storeService.setLoginData(loginData);
		}
		catch (error) {
			console.log(error)
		}
	}

	const sendSignInData = async () => {
		try {
			await storeService.setSignInData(loginData);
		}
		catch (error) {
			console.log(error)
		}
	}

	const onChangeLoginBtn = () => {
		setLoginBtn(prevState => !prevState)
	}

	const onChangeHeaderLoginBtn = () => {
		setHeaderLoginBtn(prevState => !prevState)
	}




	return (
		<div className="login">
			<p className="login__title"
				onClick={onChangeHeaderLoginBtn}>Войти</p>
			{headerLoginBtn &&
				<>
					<div className="login-blur"
						onClick={() => setHeaderLoginBtn(false)}></div>
					<div className="login-wrapper">
						<div className="login__inputs">
							<input type="text"
								id="email"
								className="login__input"
								placeholder="E-mail"
								onChange={loginHandler} />
							<input type="password"
								id="password"
								className="login__input"
								placeholder="Пароль"
								onChange={loginHandler} />
							{!loginBtn &&
								<div className="login__btn"
									onClick={sendSignInData}>Войти</div>}
							{loginBtn &&
								<div className="login__btn"
									onClick={sendRegData}>Зарегистрироваться</div>}
						</div>
						{loginBtn &&
							<div className="login__text-btn"
								onClick={onChangeLoginBtn}>Войти</div>}
						{!loginBtn &&
							<div className="login__text-btn"
								onClick={onChangeLoginBtn}>Зарегистрироваться</div>}
					</div>
				</>
			}
		</div >

	)
}

export default compose(
	withStoreService(),
	connect(null)
)(Login)


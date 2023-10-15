import { signupUser } from '../../assets/js/axios/user/userServices'
import React, { useState } from 'react'

function Signup({ token, setToken, isAuthenticated, setIsAuthenticated }) {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [agree, setAgree] = useState(false);

	const isSamePassword = () => {
		return (password === confirmPassword)
	}

	const emailIsValid = () => {
		return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
	}

	const formIsOk = () => {
		return (password.length > 0 && confirmPassword.length > 0
			&& agree
			&& isSamePassword()
		)
	}

	const submit = async () => {
		console.log(formIsOk());
		if (formIsOk()) {
			const userData = {
				'username': userName,
				'password1': password,
				'password2': confirmPassword,
			}
			if (emailIsValid) {
				userData['email'] = email
			}
			const response = await signupUser(userData);
			if (response.status === 201) {
				console.log(response);
			}
		} else {
			alert("Verifique os dados fornecidos!");
		}
	}

	return (
		<form className='container card card-body my-5' style={{ maxWidth: '24rem', backgroundColor: '#f5f5f5' }}>
			<h1 className='text-center'>Faça o seu cadastro</h1>
			{/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
			<div className="form-outline mb-4">
				<div className="form-outline">
					<input type="text" id="usernameForm" 
					className="form-control bg-white" name='username' 
					value={userName} onChange={(e) => setUserName(e.target.value)}
					required
					/>
					<label className="form-label" htmlFor="usernameForm">Nome de usuario</label>
				</div>
			</div>

			{/* <!-- Email input --> */}
			<div className="form-outline mb-4">
				<input type="email" id="emailForm" className="form-control bg-white"
					value={email} onChange={(e) => setEmail(e.target.value)} />
				<label className="form-label" htmlFor="emailForm">Email (Opcional)</label>
				{email.length > 0 && !emailIsValid() && <p className='text-danger'>Email inválido</p>}
			</div>

			{/* <!-- Password input --> */}
			<div className="form-outline mb-4">
				<input
					type="password" id="password"
					className="form-control bg-white" value={password}
					onChange={(e) => setPassword(e.target.value)}
					name='password'
				/>
				<label className="form-label" htmlFor="password">Senha</label>
			</div>
			{/* <!-- Password Confirmation input --> */}
			<div className="form-outline mb-4">
				<input
					type="password"
					id="passwordConfirmation" className="form-control bg-white"
					value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
					name='passwordConfirmation'
				/>
				<label className="form-label" htmlFor="passwordConfirmation">Senha (Confirmação)</label>
				{
					confirmPassword.length > 0 && !isSamePassword() && <p className='text-danger'>As senhas não coincidem</p>
				}
			</div>

			{/* <!-- Checkbox --> */}
			<div className="form-check d-flex justify-content-center mb-4">
				<input
					className="form-check-input me-2"
					type="checkbox" value={agree} id="form2Example33"
					onClick={() => setAgree(!agree)}
					name='agree' required
				/>
				<label className="form-check-label" htmlFor="form2Example33">
					Concordo com os <a href="#/nao-tem">termos</a> e privacidade
				</label>
			</div>

			{/* <!-- Submit button --> */}
			<button type="submit" id="signupButton" 
				className={`btn btn-primary btn-block mb-4 ${!agree && 'disabled'}`}
				onClick={async (event) => {
					event.preventDefault();
					await submit();
				}}
				>
				Registrar-me
			</button>

		</form>
	)
}

export default Signup;
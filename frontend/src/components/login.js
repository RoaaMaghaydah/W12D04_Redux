import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from './../context/login';
import { setToken } from './../reducer/login/index';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();

	const state = useSelector((state) => {
		return {
			token: state.login.token
		};
	});

	const cheakLogin = () => {
		const login = { email, password };
		//console.log(login);
		axios.post(`http://localhost:5000/login`, login)
			.then((response) => {
				//setToken(response.data.token);
				//response.json(response)
				console.log("res :  ",response.data)
				dispatch(setToken(response.data));
				history.push("/deshboard")
			})
			.catch((err) => {
				console.log(err)
				console.log("error")
			})
	}

	return (
		<>
			<input
				type="email"
				placeholder="email here"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="password here"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={cheakLogin}>Login</button>



			{/* {loginContext.message && <div>{loginContext.message}</div>} */}
		</>
	);
};

export default Login;

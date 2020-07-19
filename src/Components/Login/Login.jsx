import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../redux/loginSlice'
import { selectUser } from '../redux/userSlice'

const Login = ({ history }) => {
	const userData = useSelector(selectUser)
	const dispatch = useDispatch()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const loginValidation = e => {
		e.preventDefault()
		const validate = userData.find(
			item => item.username === username && item.password === password
		)
		if (validate === undefined) alert('Invalid login')
		else {
			dispatch(login(validate.username))
			history.push('/dashboard')
		}
	}

	return (
		<div>
			<h1 className="mb-5">Login</h1>
			<form
				className="offset-4 col-4 bg-secondary mb-5"
				onSubmit={loginValidation}
				method="POST"
			>
				<label htmlFor="username" className="h4">
					Enter Username
				</label>
				<input
					type="text"
					name="username"
					id="username"
					className="form-control mb-4"
					placeholder="Enter username"
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
				/>
				<label htmlFor="password" className="h4">
					Enter Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					className="form-control mb-4"
					placeholder="Enter password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<input
					type="submit"
					value="Login"
					className="btn btn-success btn-lg mb-4"
				/>
			</form>
			<h6>New to Broadcast?</h6>
			<Link to="/signup">Sign Up</Link>
		</div>
	)
}

export default Login

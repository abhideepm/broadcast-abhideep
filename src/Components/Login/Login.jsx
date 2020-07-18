import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div>
			<h1 className="mb-5">Login</h1>
			<form className="offset-4 col-4 bg-secondary mb-5">
				<label htmlFor="username" className="h4">
					Enter Username
				</label>
				<input
					type="text"
					name="username"
					id="username"
					className="form-control mb-4"
					placeholder="Enter username"
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

import React from 'react'

const Signup = () => {
	return (
		<div>
			<h1 className="mb-4">Signup</h1>
			<form className="offset-4 col-4 bg-secondary mb-4">
				<label htmlFor="username">Enter Username</label>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Enter Username"
					className="form-control mb-4"
				/>
				<label htmlFor="firstname">Enter First Name</label>
				<input
					type="text"
					name="firstname"
					id="firstname"
					placeholder="Enter First Name"
					className="form-control mb-4"
				/>
				<label htmlFor="lastname">Enter Last Name</label>
				<input
					type="text"
					name="lastname"
					id="lastname"
					placeholder="Enter Last Name"
					className="form-control mb-4"
				/>
				<label htmlFor="password">Enter Password</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter Password"
					className="form-control mb-4"
				/>
				<input
					type="submit"
					value="Signup"
					className="btn btn-success btn-lg mb-4"
				/>
			</form>
		</div>
	)
}

export default Signup

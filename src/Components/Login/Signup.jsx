import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { postUsers, selectUser } from '../redux/userSlice'

const Signup = ({ history }) => {
	const [username, setUsername] = useState('')
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const userData = useSelector(selectUser)
	const dispatch = useDispatch()

	const postData = e => {
		e.preventDefault()
		const findUser = userData.find(data => data.username === username)
		if (findUser === undefined) {
			const dataToBeSent = {
				username: username,
				firstname: firstname,
				lastname: lastname,
				password: password,
				email: email,
				status: 'Available',
			}
			dispatch(postUsers(dataToBeSent))
			alert('Sign-Up successful')
			history.push('/login')
		} else {
			alert('Username already exists')
		}
	}

	return (
		<div>
			<h1 className="mb-4">Signup</h1>
			<form
				className="offset-4 col-4 bg-secondary mb-4"
				onSubmit={postData}
				method="POST"
			>
				<label htmlFor="username">Enter Username</label>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Enter Username"
					className="form-control mb-4"
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
				/>
				<label htmlFor="firstname">Enter First Name</label>
				<input
					type="text"
					name="firstname"
					id="firstname"
					placeholder="Enter First Name"
					className="form-control mb-4"
					value={firstname}
					onChange={e => setFirstname(e.target.value)}
					required
				/>
				<label htmlFor="lastname">Enter Last Name</label>
				<input
					type="text"
					name="lastname"
					id="lastname"
					placeholder="Enter Last Name"
					className="form-control mb-4"
					value={lastname}
					onChange={e => setLastname(e.target.value)}
					required
				/>
				<label htmlFor="email">Enter Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter Email"
					className="form-control mb-4"
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<label htmlFor="password">Enter Password</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter Password"
					className="form-control mb-4"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<input
					type="submit"
					value="Signup"
					className="btn btn-success btn-lg mb-4"
				/>
			</form>
			<Link to="/login">
				<h5>Go back to Login</h5>
			</Link>
		</div>
	)
}

export default Signup

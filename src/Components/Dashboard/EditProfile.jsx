import React, { useState, useEffect } from 'react'
import Navbar from '../Header/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, editUser } from '../redux/userSlice'
import { selectCurrentUser } from '../redux/loginSlice'

const EditProfile = ({ history }) => {
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [status, setStatus] = useState('')
	const [email, setEmail] = useState('')
	const userData = useSelector(selectUser)
	const currentUser = useSelector(selectCurrentUser)
	const displayData = userData.find(data => data.username === currentUser)
	const dispatch = useDispatch()

	useEffect(() => {
		if (displayData !== undefined) {
			setFirstname(displayData.firstname)
			setLastname(displayData.lastname)
			setStatus(displayData.status)
			setEmail(displayData.email)
		}
	}, [displayData])

	const updateData = () => {
		const findUser = userData.find(
			data => data.username === displayData.username
		)
		const dataToBeSent = {
			...findUser,
			firstname: firstname,
			lastname: lastname,
			email: email,
			status: status,
		}
		dispatch(editUser(findUser.id, dataToBeSent))
		alert('Successfully edited')
		history.push('/dashboard/myprofile')
	}

	return (
		<div>
			<Navbar />
			{displayData !== undefined ? (
				<div className="card offset-2 col-8 text-dark mt-5">
					<label htmlFor="username">Enter Username</label>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Enter Username"
						className="form-control mb-4"
						value={displayData.username}
						required
						disabled
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
					<label htmlFor="status">Enter Status</label>
					<input
						type="status"
						name="status"
						id="status"
						placeholder="Enter Status"
						className="form-control mb-4"
						value={status}
						onChange={e => setStatus(e.target.value)}
						required
					/>
					<button className="btn btn-success btn-lg" onClick={updateData}>
						Submit
					</button>
				</div>
			) : null}
		</div>
	)
}

export default EditProfile

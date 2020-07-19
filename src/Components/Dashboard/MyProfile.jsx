import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Header/Navbar'
import { selectCurrentUser } from '../redux/loginSlice'
import { selectUser } from '../redux/userSlice'

const MyProfile = () => {
	const currentUser = useSelector(selectCurrentUser)
	const userData = useSelector(selectUser)
	const displayData = userData.find(data => data.username === currentUser)
	return (
		<div>
			<Navbar />
			{displayData !== undefined ? (
				<div className="card offset-2 col-8 text-dark mt-5">
					<div className="card-body">
						<h1 className="card-title">Hello, {displayData.firstname}</h1>
						<h4 className="card-text">
							<b>Username:</b> {displayData.username}
						</h4>
						<h4 className="card-text">
							<b>Email:</b> {displayData.email}
						</h4>
						<h4 className="card-text">
							<b>First Name: </b> {displayData.firstname}
						</h4>
						<h4 className="card-text">
							<b>Last Name:</b> {displayData.lastname}
						</h4>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default MyProfile

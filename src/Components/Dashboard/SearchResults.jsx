import React from 'react'
import Navbar from '../Header/Navbar'
import { useSelector } from 'react-redux'
import { selectQuery } from '../redux/searchSlice'
import { selectUser } from '../redux/userSlice'

const SearchResults = () => {
	const searchQuery = useSelector(selectQuery)
	const userData = useSelector(selectUser)
	let searchResults = []
	if (searchQuery !== '') {
		searchResults = userData.filter(data => data.username.includes(searchQuery))
	}

	return (
		<div>
			<Navbar />
			<h1>Search Results for '{searchQuery}'</h1>
			{searchResults.map(displayData => (
				<div
					key={displayData.id}
					className="card offset-2 col-8 text-dark mt-5"
				>
					<div className="card-body">
						<h1 className="card-title">{displayData.firstname}</h1>
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
						<h4 className="card-text">
							<b>Status:</b> {displayData.status}
						</h4>
					</div>
				</div>
			))}
		</div>
	)
}

export default SearchResults

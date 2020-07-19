import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Header/Navbar'
import { selectLoggedIn } from '../redux/loginSlice'
import Feed from './Feed'

const Dashboard = ({ history }) => {
	const loggedIn = useSelector(selectLoggedIn)

	useEffect(() => {
		if (!loggedIn) history.push('/login')
	})

	return (
		<div>
			<Navbar />
			<Feed />
		</div>
	)
}

export default Dashboard

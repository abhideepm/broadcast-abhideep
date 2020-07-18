import React, { useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import Header from './Header/Header'
import Login from './Login/Login'
import Signup from './Login/Signup'
import { fetchUsers, selectUser } from './redux/userSlice'

const App = () => {
	const userData = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		fetchUsers()
	}, [])

	return (
		<div className="text-center text-white">
			<Header />
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Redirect from="/" to="/login" />
				</Switch>
			</Router>
		</div>
	)
}

export default App

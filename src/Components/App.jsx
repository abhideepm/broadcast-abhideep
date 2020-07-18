import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Header from './Header/Header'
import Login from './Login/Login'
import Signup from './Login/Signup'
import { fetchUsers } from './redux/userSlice'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="text-center text-white">
			<Header />
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/dashboard" component={Dashboard} />
					<Redirect from="/" to="/login" />
				</Switch>
			</Router>
		</div>
	)
}

export default App

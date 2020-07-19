import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import CreatePost from './Dashboard/CreatePost'
import Dashboard from './Dashboard/Dashboard'
import MyPosts from './Dashboard/MyPosts'
import MyProfile from './Dashboard/MyProfile'
import Header from './Header/Header'
import Login from './Login/Login'
import Signup from './Login/Signup'
import { fetchPosts } from './redux/postSlice'
import { fetchUsers } from './redux/userSlice'
import Post from './Dashboard/Post'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
		dispatch(fetchPosts())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="text-center text-white">
			<Header />
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/dashboard/myposts" exact component={MyPosts} />
					<Route path="/dashboard/createpost" exact component={CreatePost} />
					<Route path="/dashboard/:who" exact component={MyProfile} />
					<Route path="/dashboard/post/:id" exact component={Post} />
					<Redirect from="/" to="/login" />
				</Switch>
			</Router>
		</div>
	)
}

export default App

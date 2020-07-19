import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import CreatePost from './Dashboard/CreatePost'
import Feed from './Dashboard/Feed'
import EditProfile from './Dashboard/EditProfile'
import MyPosts from './Dashboard/MyPosts'
import MyProfile from './Dashboard/MyProfile'
import Post from './Dashboard/Post'
import SearchResults from './Dashboard/SearchResults'
import Header from './Header/Header'
import Login from './Login/Login'
import Signup from './Login/Signup'
import { setLogin } from './redux/loginSlice'
import { fetchPosts } from './redux/postSlice'
import { fetchUsers } from './redux/userSlice'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
		dispatch(fetchPosts())
		const val = localStorage.getItem('userid')
		if (val !== null) {
			dispatch(setLogin(val))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="text-center text-white">
			<Header />
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/dashboard/myposts" exact component={MyPosts} />
					<Route path="/dashboard/createpost" exact component={CreatePost} />
					<Route path="/dashboard/myprofile" exact component={MyProfile} />
					<Route path="/dashboard/post/:id" exact component={Post} />
					<Route path="/dashboard/editprofile" exact component={EditProfile} />
					<Route path="/dashboard/feed" exact component={Feed} />
					<Route
						path="/dashboard/searchresults"
						exact
						component={SearchResults}
					/>
					<Redirect from="/" to="/login" />
				</Switch>
			</Router>
		</div>
	)
}

export default App

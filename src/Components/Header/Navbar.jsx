import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/loginSlice'

const Navbar = ({ history }) => {
	const dispatch = useDispatch()

	return (
		<div>
			<div className="bg-light text-dark mt-3">
				<ul className="d-flex list-unstyled justify-content-between py-1 mx-5">
					<li>
						<Link to="/dashboard/feed">
							<h4>Home</h4>
						</Link>
					</li>
					<li>
						<Link to="/dashboard/createpost">
							<h4>Create Post</h4>
						</Link>
					</li>
					<li>
						<Link to="/dashboard/myposts">
							<h4>My Posts</h4>
						</Link>
					</li>
					<li>
						<Link to={`/dashboard/myprofile`}>
							<h4>My Profile</h4>
						</Link>
					</li>
					<li>
						<Link to="/login" onClick={() => dispatch(logout())}>
							<h4>Log Out</h4>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar

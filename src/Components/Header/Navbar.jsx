import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<div className="bg-light text-dark mt-3">
				<ul className="d-flex list-unstyled justify-content-between py-1 mx-5">
					<li>
						<Link to="/dashboard">
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
						<Link to="/dashboard">
							<h4>My Profile</h4>
						</Link>
					</li>
					<li>
						<Link to="/login">
							<h4>Log Out</h4>
						</Link>
					</li>
				</ul>
			</div>
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search"
				className="form-control form-control-lg offset-2 col-8"
			/>
		</div>
	)
}

export default Navbar

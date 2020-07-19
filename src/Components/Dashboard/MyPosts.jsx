import { formatDistance } from 'date-fns/esm'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCurrentUser } from '../redux/loginSlice'
import { selectPost } from '../redux/postSlice'
import Navbar from '../Header/Navbar'

const MyPosts = () => {
	const postsData = useSelector(selectPost)
	const currentUser = useSelector(selectCurrentUser)
	const displayData = postsData.filter(data => data.createdBy === currentUser)
	return (
		<div>
			<Navbar />
			<div className="mt-3 offset-2 col-8 bg-light text-dark rounded">
				<h3>My Posts</h3>
				<ul className="list-unstyled">
					{displayData === undefined ? (
						<li>You haven't created any posts</li>
					) : (
						displayData.map(data => (
							<li key={data.id} className="my-3 h3">
								<Link to={`/dashboard/post/${data.id}`}>{data.title}</Link>
								<h5>
									{formatDistance(new Date(data.createdAt), new Date(), {
										addSuffix: true,
									})}
								</h5>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	)
}

export default MyPosts

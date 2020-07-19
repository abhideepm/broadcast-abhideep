import React from 'react'
import { useSelector } from 'react-redux'
import { selectPost } from '../redux/postSlice'
import Navbar from '../Header/Navbar'
import { formatDistance } from 'date-fns'

const Post = ({ match }) => {
	const postData = useSelector(selectPost)
	const displayData = postData.find(data => {
		return data.id === +match.params.id
	})
	return (
		<div>
			<Navbar />
			{displayData !== undefined ? (
				<div className="card text-dark offset-2 col-8 rounded mt-5">
					<div className="card-body">
						<h3 className="card-title">{displayData.title}</h3>
						<h5 className="card-subtitle mb-2 text-primary">
							{displayData.createdBy}
						</h5>
						<h5>
							{formatDistance(new Date(displayData.createdAt), new Date(), {
								addSuffix: true,
							})}
						</h5>
						<p className="card-text">{displayData.content}</p>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default Post

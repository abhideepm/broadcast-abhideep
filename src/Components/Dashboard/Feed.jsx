import React from 'react'
import { useSelector } from 'react-redux'
import { selectPost } from '../redux/postSlice'
import { Link } from 'react-router-dom'

const Feed = () => {
	const postdata = useSelector(selectPost)
	console.log(postdata)
	return (
		<div className="mt-3 offset-2 col-8 bg-light text-dark rounded">
			<h3>Feed</h3>
			<ul className="list-unstyled">
				{postdata.map(data => (
					<li key={data.id} className="my-3 h3">
						<Link to={`/dashboard/post/${data.id}`}>{data.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Feed

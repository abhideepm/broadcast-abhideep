import { formatDistance } from 'date-fns/esm'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import { selectPost } from '../redux/postSlice'
import { setQuery } from '../redux/searchSlice'
import { selectLoggedIn } from '../redux/loginSlice'

const Feed = ({ history }) => {
	const loggedIn = useSelector(selectLoggedIn)
	const [search, setSearch] = useState('')
	const dispatch = useDispatch()
	const postdata = useSelector(selectPost)

	useEffect(() => {
		if (!loggedIn) history.push('/login')
	})

	return (
		<div>
			<Navbar />
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search by username"
				className="form-control form-control-lg offset-2 col-8"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<button
				className="btn btn-lg btn-primary my-3"
				onClick={() => {
					dispatch(setQuery(search))
					history.push('/dashboard/searchresults')
				}}
			>
				Search!
			</button>
			<div className="mt-3 offset-2 col-8 bg-light text-dark rounded">
				<h3>Feed</h3>
				<ul className="list-unstyled">
					{postdata.map(data => (
						<li key={data.id} className="my-3 h3">
							<Link to={`/dashboard/post/${data.id}`}>{data.title}</Link>
							<h5 className="text-muted">{data.createdBy}</h5>
							<h5>
								{formatDistance(new Date(data.createdAt), new Date(), {
									addSuffix: true,
								})}
							</h5>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Feed

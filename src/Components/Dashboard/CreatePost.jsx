import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Header/Navbar'
import { selectCurrentUser } from '../redux/loginSlice'
import { postPosts } from '../redux/postSlice'

const CreatePost = ({ history }) => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const currentUser = useSelector(selectCurrentUser)
	const dispatch = useDispatch()

	const postData = e => {
		e.preventDefault()
		const dataToBeAdded = {
			title: title,
			content: content,
			createdAt: new Date(),
			createdBy: currentUser,
		}
		dispatch(postPosts(dataToBeAdded))
		history.push('/dashboard')
	}

	return (
		<div>
			<Navbar />
			<h1 className="mt-3">What's in your mind?</h1>
			<form onSubmit={postData} method="POST">
				<label htmlFor="title" className="h3 mt-2">
					Title
				</label>
				<input
					type="text"
					name="title"
					id="title"
					className="form-control form-control-lg offset-4 col-4"
					placeholder="Enter title of post you want to create"
					value={title}
					onChange={e => setTitle(e.target.value)}
					required
				/>
				<label htmlFor="content" className="h3 mt-2">
					Content
				</label>
				<p>{'(' + +(150 - content.length) + ' characters remaining)'}</p>
				<textarea
					type="text"
					name="content"
					id="content"
					className="form-control form-control-lg offset-4 col-4"
					placeholder="Enter content of post you want to create"
					value={content}
					onChange={e => {
						if (e.target.value.length <= 150) setContent(e.target.value)
					}}
					rows="8"
					required
				/>
				<input
					type="submit"
					value="Create Post"
					className="btn btn-success btn-lg mt-5"
				/>
			</form>
		</div>
	)
}

export default CreatePost

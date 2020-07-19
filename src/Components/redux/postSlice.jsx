import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
	name: 'posts',
	initialState: {
		postData: [],
	},
	reducers: {
		init: (state, action) => {
			state.postData = action.payload
		},
		addCreatePost: (state, action) => {
			state.postData.unshift(action.payload)
		},
	},
})

export const { init, addCreatePost } = postSlice.actions

export const fetchPosts = () => dispatch => {
	fetch(
		'https://broadcast-social-database.herokuapp.com/posts?_sort=createdAt&_order=desc'
	)
		.then(res => {
			if (res.ok) return res.json()
			else return new Error('Fetch Failed')
		})
		.then(data => {
			dispatch(init(data))
		})
		.catch(err => console.log(err))
}

export const postPosts = data => dispatch => {
	dispatch(addCreatePost(data))
	fetch('https://broadcast-social-database.herokuapp.com/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const selectPost = state => state.posts.postData

export default postSlice.reducer

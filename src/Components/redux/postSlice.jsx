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
	},
})

export const { init } = postSlice.actions

export const fetchPosts = () => dispatch => {
	fetch('https://broadcast-social-database.herokuapp.com/posts')
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

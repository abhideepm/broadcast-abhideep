import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userData: [],
	},
	reducers: {
		init: (state, action) => {
			state.userData = action.payload
		},
		addSignUp: (state, action) => {
			state.userData.push(action.payload)
		},
	},
})

export const { init, addSignUp } = userSlice.actions

export const fetchUsers = () => dispatch => {
	fetch('https://broadcast-social-database.herokuapp.com/users')
		.then(res => {
			if (res.ok) return res.json()
			else return new Error('Fetch Failed')
		})
		.then(data => {
			dispatch(init(data))
		})
		.catch(err => console.log(err))
}

export const postUsers = data => dispatch => {
	fetch('https://broadcast-social-database.herokuapp.com/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const selectUser = state => state.user.userData

export default userSlice.reducer

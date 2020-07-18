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
	},
})

export const { init } = userSlice.actions

export const fetchUser = () => dispatch => {
	fetch('https://broadcast-social-database.herokuapp.com/users')
		.then(res => {
			console.log('inside then')
			if (res.ok) return res.json()
			throw new Error('Fetch Failed')
		})
		.then(data => {
			console.log('inside fetchUser')
			dispatch(init(data))
		})
		.catch(err => console.log(err))
}

export const selectUser = state => state.user.userData

export default userSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'users',
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
		edit: (state, action) => {
			state.userData = state.userData.filter(
				data => data.username !== action.payload.username
			)
			state.userData.push(action.payload)
		},
	},
})

export const { init, addSignUp, edit } = userSlice.actions

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
	dispatch(addSignUp(data))
	fetch('https://broadcast-social-database.herokuapp.com/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const editUser = (id, data) => dispatch => {
	dispatch(edit(data))
	fetch(`https://broadcast-social-database.herokuapp.com/users/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const selectUser = state => state.users.userData

export default userSlice.reducer

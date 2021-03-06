import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		loggedIn: false,
		currentUser: '',
	},
	reducers: {
		login: (state, action) => {
			state.loggedIn = true
			state.currentUser = action.payload
			localStorage.setItem('userid', state.currentUser)
		},
		setLogin: (state, action) => {
			state.loggedIn = true
			state.currentUser = action.payload
		},
		logout: state => {
			localStorage.clear()
			state.loggedIn = false
			state.currentUser = ''
		},
	},
})

export const { login, setLogin, logout } = loginSlice.actions

export const selectLoggedIn = state => state.login.loggedIn
export const selectCurrentUser = state => state.login.currentUser

export default loginSlice.reducer

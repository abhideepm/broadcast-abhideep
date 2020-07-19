import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../userSlice'
import postReducer from '../postSlice'
import loginReducer from '../loginSlice'
import searchReducer from '../searchSlice'

export default configureStore({
	reducer: {
		users: userReducer,
		posts: postReducer,
		login: loginReducer,
		search: searchReducer,
	},
})

import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './booksSlice'
import authSlice from './authSlice'
const store = configureStore({
  reducer: {
    books: booksSlice,
    auth: authSlice,
  },
})
export default store

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// get books from database
export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
      const res = await fetch('http://localhost:3015/books')
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
// insert book  books from database

export const insertBook = createAsyncThunk(
  'books/insertBook',
  async (bookData, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi
    bookData.name = getState().auth.name
    try {
      const res = await fetch('http://localhost:3015/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
// delete book  books from database

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
      await fetch(`http://localhost:3015/books/${data.id}`, {
        method: 'DELETE',
      })
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
//  read book from database
export const readBook = createAsyncThunk(
  'books/readBook',
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi

    try {
      await fetch(`http://localhost:3015/books/${data.id}`, {
        method: 'GET',
      })
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: null,
    isLoading: false,
    error: null,
    readBooks: null,
  },
  extraReducers: {
    // get books
    [getBooks.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload
      state.isLoading = false
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // insert books
    [insertBook.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false
      state.books.push(action.payload)
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // delete book
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true
      state.error = null
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.books = state.books.filter((el) => el.id !== action.payload.id)
      state.isLoading = false
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // read book
    [readBook.fulfilled]: (state, action) => {
      state.readBook = action.payload
      // if (state.books.include(action.payload)) {
      //   state.readBook = null
      // }
    },
  },
})

export default booksSlice.reducer

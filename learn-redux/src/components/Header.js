import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logInOut } from '../app/authSlice'
const Header = () => {
  const dispatch = useDispatch()
  const result = useSelector((state) => state.books)
  const isLoggedIn = useSelector((state) => state.auth.logInOut)

  const { books, isLoading, error } = result
  return (
    <>
      {error && (
        <h1 className='alert alert-danger m-0 text-center'>
          failed to fetch data 🤡{' '}
        </h1>
      )}
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button
          className='btn btn-outline-primary'
          type='submit'
          onClick={() => dispatch(logInOut())}
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </nav>
    </>
  )
}

export default Header

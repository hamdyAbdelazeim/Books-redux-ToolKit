import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, deleteBook } from '../../app/booksSlice'
import { readBook } from '../../app/booksSlice'

const BooksList = () => {
  const dispatch = useDispatch()
  const result = useSelector((state) => state.books)
  const { books, isLoading, error } = result
  console.log(isLoading)
  const isLoggedIn = useSelector((state) => state.auth.logInOut)

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? (
        <div>loading </div>
      ) : books && books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <ul className='list-group'>
              <li className='list-group-item d-flex justify-content-between align-items-center'>
                <div>{book.title}</div>
                <div className='btn-group' role='group'>
                  <button
                    type='button'
                    className='btn btn-primary'
                    disabled={!isLoggedIn}
                    onClick={() => dispatch(readBook(book))}
                  >
                    Read
                  </button>
                  <button
                    type='button'
                    className='btn btn-danger'
                    disabled={!isLoggedIn}
                    onClick={() =>
                      dispatch(deleteBook(book)).then((data) =>
                        console.log(data)
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <div>No books found</div>
      )}

      {error && <div>{error}</div>}
    </div>
  )
}

export default BooksList

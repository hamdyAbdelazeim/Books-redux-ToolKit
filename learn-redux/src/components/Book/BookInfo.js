import React, { Fragment } from 'react'
import { readBook } from '../../app/booksSlice'
import { useSelector, useDispatch } from 'react-redux'
const BookInfo = () => {
  const bookInfo = useSelector((data) => data.books.readBook)
  console.log(bookInfo)
  return (
    <Fragment>
      <h2>Book Details</h2>
      {bookInfo ? (
        <div>
          <p className='fw-bold'>Title: {bookInfo.title}</p>
          <p className='fw-light'>Description: {bookInfo.description}</p>
          <p className='fst-italic'>Price: {bookInfo.price}</p>
        </div>
      ) : (
        <div className='alert alert-secondary' role='alert'>
          There is no post selected yet. Please select!
        </div>
      )}
    </Fragment>
  )
}

export default BookInfo

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insertBook } from '../app/booksSlice'
const Addform = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.logInOut)
  // const result = useSelector((state) => state.books)
  // const { books, isLoading, error } = result
  // const id = books?.length
  // console.log(id)
  const [book, setBook] = useState({})
  // console.log(book)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(insertBook(book))
    setBook({ title: '', description: '', price: '' })
  }
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title'
              required
              onChange={(e) => setBook({ ...book, title: e.target.value })}
              value={book.title}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              className='form-control'
              id='price'
              required
              value={book.price}
              onChange={(e) => setBook({ ...book, price: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              value={book.description}
              onChange={(e) =>
                setBook({ ...book, description: e.target.value })
              }
            ></textarea>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addform

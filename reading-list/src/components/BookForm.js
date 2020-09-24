import React, { useState, useContext } from 'react'
import { BookContext } from '../context/BookContext';
const formData = {
  title: '',
  author: ''
}
const NewBokForm = () => {
  const { dispatch } = useContext(BookContext)
  const [bookDetails, setBookDetails] = useState(formData)
  const setBookDetailsHandler = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value })
    console.log(bookDetails);
    e.preventDefault()
  }
  const handleSubmit = (e) => {
    dispatch({ type: 'ADD_BOOK', book: bookDetails })
    console.log(bookDetails);
    bookDetails.title = ''
    bookDetails.author = ''
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={bookDetails.title}
        name="title"
        onChange={(e) => setBookDetailsHandler(e)}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={bookDetails.author}
        name="author"
        required
        onChange={(e) => setBookDetailsHandler(e)}
      />
      <input type="submit" value="add book" />
    </form>
  );
}

export default NewBokForm;
import React, { useState } from 'react'


const NewSongForm = ({ addSongHandler }) => {
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    addSongHandler(title)
    document.forms['addSongForm'].reset()
    setTitle('')
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} id="addSongForm">
      <label htmlFor="songTitle">Song name:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="submit" value="add song" />
    </form>
  );
}

export default NewSongForm;
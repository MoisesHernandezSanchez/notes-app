import React, { useState } from 'react'

export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('')
  const charLimit = 200

  function handleChange(e) {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value)
    }
  }

  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className='note new'>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type here to add new note'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className='note-footer'>
        <small>{charLimit - noteText.length} remaining</small>
        <button className='save' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  )
}

import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({ handleSearchNote }) {
  return (
    <div className='search'>
      <MdSearch className='search-icon' size='1.3em' />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type='text'
        placeholder='Search...'
      ></input>
    </div>
  )
}

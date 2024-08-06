import React from 'react'
import SearchBar from '../SearchBar';

function Header() {
  return (
    <header className='header'>
      <div className="container">
       <SearchBar />
      </div>
    </header>
  )
}

export default Header;
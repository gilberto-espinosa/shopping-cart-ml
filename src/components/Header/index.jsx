import React from 'react'
import SearchBar from '../SearchBar';

import './styles.css'

function Header() {
  return (
    <header className='header'>
      <div className="container">
       <SearchBar />
       <button>cart</button>
      </div>
    </header>
  )
}

export default Header;
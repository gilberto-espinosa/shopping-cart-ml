import React from 'react'
import SearchBar from '../SearchBar';
import CartButton from '../CartButton';

import './styles.css'

function Header() {
  return (
    <header className='header'>
      <div className="container">
       <SearchBar />
       <CartButton />
      </div>
    </header>
  )
}

export default Header;
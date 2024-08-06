import React from 'react'

function SearchBar() {
  return ( 
    <form >
    <input 
      type="search" 
      placeholder='Buscar produtos' 
      className='search__input' 
      required
    />
    <button type='button' className='search__button'>
      icon
    </button>
  </form>
   );
}

export default SearchBar;

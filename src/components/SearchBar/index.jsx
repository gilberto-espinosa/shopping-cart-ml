import React from 'react'

import { CiSearch } from "react-icons/ci";

import './styles.css'

function SearchBar() {
  return ( 
  <form className='search-bar'>
    <input 
      type="search" 
      placeholder='Buscar produtos' 
      className='search__input' 
      required
    />
    <button type='button' className='search__button'>
      <CiSearch />
    </button>
  </form>
   );
}

export default SearchBar;

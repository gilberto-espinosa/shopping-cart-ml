import React, {useState} from 'react'

import { CiSearch } from "react-icons/ci";

import './styles.css'

function SearchBar() {
const [searchValue, setSearchValue] = useState('')

  return ( 
  <form className='search-bar'>
    <input 
      type="search"
      value={searchValue}
      placeholder='Buscar produtos' 
      className='search__input' 
      onChange={({target}) => setSearchValue(target.value)}
      required
    />
    <button type='button' className='search__button'>
      <CiSearch  size={20}/>
    </button>
  </form>
   );
}

export default SearchBar;

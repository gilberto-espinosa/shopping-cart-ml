import React, {useState} from 'react'

import { CiSearch } from "react-icons/ci";

import './styles.css'
import fetchProducts from '../../api/fetchProducts';

function SearchBar() {
const [searchValue, setSearchValue] = useState('')

const headleSearch = async (event) => {
  event.preventDefault();
  const products = await fetchProducts(searchValue);
  console.log(products)
  setSearchValue('')
}

  return ( 
  <form className='search-bar' onSubmit={headleSearch}>
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

import React, {useState, useContext} from 'react'

import { CiSearch } from "react-icons/ci";
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext.js'

import './styles.css'

function SearchBar() {
  const {setProducts, setLoading} = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('')

  const headleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
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

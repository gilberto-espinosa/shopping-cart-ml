import propTypes from 'prop-types'
import React, { useContext } from "react";

import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext'

import './styles.css'

function ProductCard({data}) {
  const {title, thumbnail, price} = data;

  const {cartItems, setcartItems} = useContext(AppContext)

  const handleAddCart = () => {
    setcartItems([...cartItems, data])
  };

  return ( 
    <section className="product-card">
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
        alt="product" 
        className="card__image"/>

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button 
        type="button" 
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill size={30}/>
      </button>
    </section>
   );
}

export default ProductCard;

ProductCard.prototype = {
  data: propTypes.shape({})
}.isRequired;
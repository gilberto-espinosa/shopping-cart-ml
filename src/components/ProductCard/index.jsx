import { BsFillCartPlusFill } from "react-icons/bs";

import propTypes from 'prop-types'
import React from "react";
import './styles.css'

function ProductCard({data}) {
  const {title, thumbnail, price} = data;
  return ( 
    <section className="product-card">
      <img 
        src={thumbnail} 
        alt="product" 
        className="card__image"/>

      <div className="card__infos">
        <h2 className="card__price">{price}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill size={30}/>
      </button>
    </section>
   );
}

export default ProductCard;

ProductCard.prototype = {
  data: propTypes.shape({})
}.isRequired;
import { BsFillCartPlusFill } from "react-icons/bs";

import React from "react";
import './styles.css'

function ProductCard() {
  return ( 
    <section className="product-card">
      <img 
        src="https://http2.mlstatic.com/D_918579-MLM51559384401_092022-W.jpg" 
        alt="product" 
        className="card__image"/>

      <div className="card__infos">
        <h2 className="card__price">R$ 200.20</h2>
        <h2 className="card__title">Produto</h2>
      </div>
      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill size={30}/>
      </button>
    </section>
   );
}

export default ProductCard;
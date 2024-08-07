import React, { useContext } from "react";
import propTypes from 'prop-types';

import { VscDiffRemoved } from "react-icons/vsc";
import formatCurrency from "../../utils/formatCurrency"
import AppContext from "../../context/AppContext";

import './styles.css'

function CartItem({data}) {
  const {id, thumbnail, title, price} = data;

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems)
  };

  return ( 
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="imagem do produto" 
        className="cart-item-image" 
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
          <button 
            type="button" 
            className="button__remove-item"
            onClick={ handleRemoveItem }
          >
            <VscDiffRemoved  size={25}/>
          </button>
      </div>
    </section>
   );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
import React from 'react'
import { BsCart } from "react-icons/bs";

import './styles.css'

function CartButton() {
  return ( 
  <button className="cart__button">
    <BsCart />
    <span className="cart__status">1</span>
  </button> 
  );
}

export default CartButton;
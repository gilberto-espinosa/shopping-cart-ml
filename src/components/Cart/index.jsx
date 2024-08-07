import React, { useContext } from "react";

import CartItem from "../CartItem";
import AppContext from '../../context/AppContext'

import './styles.css'
import formatCurrency from "../../utils/formatCurrency";

function Cart() {
  const {cartItems} = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0)

  return ( 
    <section className="cart">
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem key={`${index}:${item.id}`} data={item} />
        ))}
      </div>

      <div className="cart-resume">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
   );
}

export default Cart;
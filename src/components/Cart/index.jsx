import React, { useContext } from "react";

import CartItem from "../CartItem";
import AppContext from '../../context/AppContext'

import './styles.css'

function Cart() {
  const {cartItems} = useContext(AppContext)

  return ( 
    <section className="cart">
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem key={`${index}:${item.id}`} data={item} />
        ))}
      </div>

      <div className="cart-resume">resume</div>
    </section>
   );
}

export default Cart;
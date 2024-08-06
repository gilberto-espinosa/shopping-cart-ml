import React, { useEffect, useState } from "react";

import fetchProducts from "../../api/fetchProducts";
import './styles.css'
import ProductCard from "../ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
      console.log(products)
    })
  },[])


  return ( 
    <section className="products container">
      <ProductCard />
    </section>
   );
}

export default Products;
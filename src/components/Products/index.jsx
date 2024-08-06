import React, { useEffect, useState } from "react";

import fetchProducts from "../../api/fetchProducts";
import './styles.css'
import ProductCard from "../ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
    })
  },[])


  return ( 
    <section className="products container">
      {
        products.map((product)=> <ProductCard key={product.id} data={product}/>)
      }
    </section>
   );
}

export default Products;
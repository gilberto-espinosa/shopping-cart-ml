import React, { useEffect, useState } from "react";

import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard";

import './styles.css'
import Loading from "../Loading";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
      setLoading(false)
    })
  },[])

  return ( 
    (loading && <Loading />) || (
      <section className="products container">  
        {products.map((product)=> <ProductCard key={product.id} data={product}/>)}
      </section>
    )     
   );
}

export default Products;
import React, { useContext, useEffect } from "react";

import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard";

import AppContext from "../../context/AppContext";
import Loading from "../Loading";
import './styles.css';

function Products() {
  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  

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
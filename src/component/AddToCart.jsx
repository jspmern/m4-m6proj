import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useFetch } from "../Context/ProductContext";
import ToggleAddtoCart from "./ToggleAddtoCart";

function AddToCart() {
  // let { stock } = singleProduct;
      let {singleProduct } = useFetch()
      let {stock}=singleProduct
  let {addCart}=useCart()
  let [cartCount, setCartCount] = useState(1);
  function cartDecHandler() {
    cartCount < 1 ? setCartCount(1) : setCartCount(cartCount - 1);
  }
  function cartIncHandler() {
    stock <= cartCount ? setCartCount(stock) : setCartCount(cartCount + 1);
  }
  return (
    <>
      <ToggleAddtoCart cartDecHandler={cartDecHandler} cartIncHandler={cartIncHandler} cartCount={cartCount}/>
      <br/>
        <NavLink to="/cart"><button className="btn btn-primary m-3" onClick={()=>{
          addCart({singleProduct,cartCount})
        }}>ADD TO CART</button></NavLink> 
    </>
  );
}

export default AddToCart;

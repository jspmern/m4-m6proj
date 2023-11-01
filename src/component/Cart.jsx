import React, { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import AddToCart from "./AddToCart";
import { AiOutlineDelete } from "react-icons/ai";
import ToggleAddtoCart from "./ToggleAddtoCart";
import { NavLink } from "react-router-dom";

function Cart() {
  let { cart, removeHandler, incHandler, decHandler ,clearAll, shipping_price, totalPrice} = useCart();

  return (
    <>
      {cart.length==0 &&    <div className="container">
                            <div className="row d-flex justify-content-center align-items-center" style={{height:"50vh" ,width:"100%"}}>
                                <div className="col">
                                <h1>Cart is Empty</h1>
                                <NavLink to="/">

                                <button className="btn btn-primary">continue shopping</button>
                                </NavLink>
                                
                                </div>
                            </div>
                   
                            </div>}
     {cart.length >0 && ( <div className="container">
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-2">ITEM</div>
          <div className="col-md-2">PRICE</div>
          <div className="col-md-2">QUANTITY</div>
          <div className="col-md-2">SUBTOTAL</div>
          <div className="col-md-2">REMOVE</div>
          <hr />
        </div>

        {cart.length > 0 &&
          cart.map((item) => {
            return (
              <div className="row d-flex justify-content-evenly">
                <div className="col-md-2">
                  <div>
                    <img
                      src={item.images}
                      alt={Math.random() * 1000}
                      className="img-fluid"
                    />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div className="col-md-2">{item.price}</div>
                <div className="col-md-2">
                  <ToggleAddtoCart
                    cartCount={item.cartCount}
                    cartDecHandler={() => {
                      decHandler(item.id);
                    }}
                    cartIncHandler={() => {
                      incHandler(item.id);
                    }}
                  />
                </div>
                <div className="col-md-2">{item.price * item.cartCount}</div>
                <div className="col-md-2">
                  <button style={{ border: "none", backgroundColor: "white" }}>
                    <AiOutlineDelete
                      style={{ color: "red" }}
                      onClick={() => {
                        removeHandler(item.id);
                      }}
                    />
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        <div className="container">
          <div className="row d-flex justify-content-between m-5">
            <div className="col-md-3">
              <NavLink to="/">
                {" "}
                <button className="btn btn-primary">CONTINUE SHOPPING</button>
              </NavLink>
            </div>
            <div className="col-md-3">
              <button className="btn btn-danger" onClick={clearAll}>CLEAR ALL CART</button>
            </div>
          </div>
        </div>

        <div className="container bg-light"  style={{height:"40vh",width:"30%"}}>
          <div className="row d-flex justify-content-end" >
            <div className="col">
            <p>SubTotal:{ totalPrice}</p>
            <p>Shipping Price:{ shipping_price}</p>
            <br/>
            <hr/>
            <p>Order Total:{shipping_price +  totalPrice}</p>
            </div>
          </div>

        </div>
      </div>)}
    </>
  );
}

export default Cart;

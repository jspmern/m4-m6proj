import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

let cartContextValue = createContext();

function CartContext({ children }) {
  let intialState = {
    cart: getData(),
    shipping_price: 500,
    totalCount: "",
    totalPrice:""
  };

  //this is for inc and dec in add to cart

  function incHandler(id) {
    dispatch({ type: "INC_CART", payload: id });
  }
  function decHandler(id) {
    dispatch({ type: "DEC_CART", payload: id });
  }

  //storage system
  function getData() {
    return localStorage.getItem("ecomData")
      ? JSON.parse(localStorage.getItem("ecomData"))
      : [];
  }
  function setData() {
    localStorage.setItem("ecomData", JSON.stringify(state.cart));
  }
  //function to get value of cart
  function addCart(data) {
    dispatch({ type: "SET_CART", payload: data });
  }
  //this is for the rmeove
  function removeHandler(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }
  //this is for the clear all the cart item
  function clearAll()
  {
    dispatch({type:"CLEAR_ALL"})
  }
  let [state, dispatch] = useReducer(reducer, intialState);
  //this is for the total
  useEffect(() => {
    dispatch({ type: "TOTAL_COUNT" });
    dispatch({type:"TOTAL_PRICE"})
    setData();
  }, [state.cart]);
  return (
    <cartContextValue.Provider
      value={{ ...state, addCart, removeHandler, incHandler, decHandler,clearAll }}
    >
      {children}
    </cartContextValue.Provider>
  );
}

//custom hook
export const useCart = () => {
  return useContext(cartContextValue);
};

export default CartContext;

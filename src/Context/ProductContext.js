import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/productReducer";
import axios from "axios";
export let productContext = createContext();

function ProductContext({ children }) {
  let intialvalue = {
    data: [],
    isLoding: false,
    error: "",
    singleProduct: {},
    isSingleLoading: false,
  };
  let [state, dispatch] = useReducer(reducer, intialvalue);
  //function handler for fetching the data
  let url = "https://dummyjson.com/products";
  async function fetchData() {
    dispatch({ type: "LODING" });
    try {
      let res = await axios.get(url);
      let data = await res.data.products;
      dispatch({ type: "FETCH_DATA", payload: data });
    } catch (e) {
      dispatch({ type: "FETCH_ERROR", payload: e });
    }
  }


  //this is for the single page   fetching

 async function singleFetch(url)
  {

      dispatch({type:"SINGLE_LOADING"})
      try{
         let res=await axios.get(url)
         let data= await res.data
        dispatch({type:"SINGLE_FETCH",payload:data})
      }
      catch(e)
      {
          dispatch({type:"SINGLE_ERROR",payload:e})
      }
      
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <productContext.Provider value={{ ...state,singleFetch }}>
      {children}
    </productContext.Provider>
  );
}
//custom hook
let useFetch = () => {
  return useContext(productContext);
};
export { useFetch };

export default ProductContext;

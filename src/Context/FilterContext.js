import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/filterReducer";
import { useFetch } from "./ProductContext";
//1.import createContext
let filterContextValue = createContext();

function FilterContext({ children }) {
  //this is for the intilal state
  let intialState = {
    filterData: [],
    allData: [],
    sorting: "lowest",
    filter: {
      text: "",
      category: "",
      company: "",
      maxPrice:"",
      minPrice:0,
      price:''
    },
  };
  let [state, dispatch] = useReducer(reducer, intialState);
  //custom hook for getting api response
  let { data } = useFetch();
  //setting the value of sorting
  function updateSort(e) {
    let { value } = e.target;
    dispatch({ type: "SET_SORTING_VALUE", payload: value });
  }

  //this is for the setting the value of filterObject
     function setFilterValue(e)
     { 
      console.log(e.target.value,e.target.name)
       dispatch({type:"SET_FILTER_VALUE",payload:e})
     }

     //this is for the clear all filter
     function clearFilter()
     {
      dispatch({type:"CLEAR_ALL_FILTER"})
     }

  //this is for the getting data form product context
//setting the intial data 
  useEffect(() => {
    console.log("hii i am useEffect in filter");
    dispatch({ type: "SET_FILTER_DATA", payload: data });
    
  }, [data]);
   //sorting
  useEffect(() => {
    dispatch({ type: "SET_SORTING", payload: data });
  }, [state.sorting]);
  //filteration
   useEffect(()=>{
     dispatch({type:"FILTERATION"})
   },[state.filter])

  return (
    <filterContextValue.Provider value={{ ...state, updateSort,setFilterValue ,clearFilter}}>
      {children}{" "}
    </filterContextValue.Provider>
  );
}

//this is the custom hook
export const useFilter = () => {
  return useContext(filterContextValue);
};

export default FilterContext;

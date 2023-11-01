import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function ToggleAddtoCart({cartDecHandler,cartIncHandler,cartCount}) {
  
  return (
    <>
    <button
        className="m-3"
        style={{ backgroundColor: "white", border: "none" }}
        onClick={cartDecHandler}
      >
        <AiOutlineMinus />
      </button>
      <span>{cartCount}</span>
      <button
        className="m-3"
        style={{ backgroundColor: "white", border: "none" }}
        onClick={cartIncHandler}
      >
        <AiOutlinePlus />
      </button>
    </>
  )
}

export default ToggleAddtoCart
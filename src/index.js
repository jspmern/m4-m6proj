import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./Context/ProductContext";
import CartContext from "./Context/CartContext";
import FilterContext from "./Context/FilterContext";
//hii i am commit
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <FilterContext>
      <CartContext>
        <App />
      </CartContext>
      </FilterContext>
    </ProductContext>
  </BrowserRouter>
);

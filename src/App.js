import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Headers from "./component/Headers";
import SinglePage from "./component/SinglePage";
import ProductList from "./component/ProductList";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<ProductList/>} />
        <Route path="/singlepage/:id" element={<SinglePage/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

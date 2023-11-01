import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Context/ProductContext";
import Loding from "./commonComp/Loding";
import AddToCart from "./AddToCart";
import Gallary from "./Gallary";

function SinglePage() {
  let { id } = useParams();
  let { singleFetch, error, singleProduct, isSingleLoading } = useFetch();
  
  let {
    title,
    rating,
    description,
    stock,
    price,
    brand,
    images,
    id: productID,
    discountPercentage
  } = singleProduct;

  useEffect(() => {
    let url = `https://dummyjson.com/products/${id}`;
    singleFetch(url);
  }, []);
  if(singleProduct)
  {
    return (
      <>
        {isSingleLoading && <Loding />}
        {!isSingleLoading && error && <h1>somthing wrong......</h1>}
        {!isSingleLoading && !error && (
          <div className="container">
            <div className="row  d-flex justify-content-evenly">
              <div className="col-md-5">
                 { singleProduct ?  <Gallary images={images} />:null}
              </div>
              
              <div className="col-md-5">
                <h1 className="display-1">{title}</h1>
                <p>{rating}</p>
               <p>MRP:{price}</p> 
               <p className="text-primary">deal of the day:{price-((price*discountPercentage)/100)}</p>
               <p className="m-2">
                {description}
               </p>
               <div style={{height:"40px",width:"100%"}}>
                    <h1>logo</h1>
               </div>
  
               <hr/>
               <p>Available: <b> {stock>0? "In Stock":"Out of Stock"}</b></p>
               <p>Brand:<b>{brand}</b></p>
               <hr/>
                 {singleProduct.id && <AddToCart  singleProduct={singleProduct}/>}  
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  else
  {
   return <Loding/>
  }
  
}

export default SinglePage;

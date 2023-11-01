import React, { useState } from 'react'

function Gallary({images}) {
    let [url,setUrl]= useState(  images? images[0]:null)
    function  imageHandler(url)
    {
       setUrl(url)
    }
  return (
    <div className="row">
    <div className="col-md-6"> 
        {images  ?   images.map((data,i)=>{
          return(
            <div className="m-3">
               <img src={data} key={i} alt={i}  className="img-fluid"  onClick={()=>{
                imageHandler(data)
               }}/>
            </div> 
                )
          
         
        }):null}
      </div>
      <div className="col-md-6">
        <div  style={{width:"100%" ,height:"100vh"}}   className="d-flex justify-content-center align-items-center">
        <img
            alt={Math.random()*1000}
          src={url }
          className="img-fluid"
        />
        </div>
        
      </div>
     
    </div>
  )
}

export default Gallary
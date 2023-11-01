import React from 'react'

function Banner({content}) {
  return (
     <>
     <div className="container">
        <div className="row d-flex justify-content-evenly mt-5">
            <div className="col-md-5">
                <img src='https://www.mattsenkumar.com/wp-content/uploads/2020/05/MK_Insights_12-05-2020.jpg' className='img-fluid'/>
            </div>
            <div className="col-md-5">
                  <h1>{content}</h1>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo esse cum consectetur suscipit, sint aspernatur ipsum! Corrupti reprehenderit nostrum, dolorem fugit tempora tenetur, maiores veritatis eligendi officia optio magnam!</p>
                  <button className='btn btn-primary' >Continue Shopping</button>
            </div>
        </div>
     </div>
     </>
)}

export default Banner
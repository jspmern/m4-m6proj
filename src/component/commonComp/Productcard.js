import React from 'react'
import { NavLink } from 'react-router-dom'

function Productcard({item}) {
    let {title,price,thumbnail,id}=item
  return (
     <>
     <div className='col-md-3 m-2'>
        <div>
          <NavLink to={`/singlepage/${id}`}> <img   src={thumbnail} alt="abc" className='img-fluid'  style={{height:"215px", width:"250px"}}/> </NavLink> 
        </div>
        <p>{title}</p>
        <p>{price}</p>
     </div>
     </>
  )
}

export default Productcard
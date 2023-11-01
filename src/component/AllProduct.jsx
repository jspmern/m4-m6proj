import React, { useContext } from 'react'
import Productcard from './commonComp/Productcard'
import { useFetch } from '../Context/ProductContext'
import Loding from './commonComp/Loding'
 
 

function AllProduct() {
 let {isLoding,data,error}= useFetch()
    let arr=[1,2,3]
  return (
            <>
            <div className="container">
                <div className="row d-flex justify-content-evenly m-3">

                 {isLoding && !error && <Loding/>}
                 {!isLoding && !error && data.length==0 && <h1>somthing wrong...</h1>}
                 {!isLoding && error && <h1>somthing wrong...</h1>}
                 {!isLoding && !error &&  data.map((item,i)=>{
                  return <Productcard key={i} item={item}/>
                 }).slice(0,3) }



                    
                </div>
            </div>
            </>
  )
}

export default AllProduct
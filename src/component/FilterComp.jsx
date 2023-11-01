import React from 'react'
import { useFilter } from '../Context/FilterContext'

function FilterComp() {
    let {allData,setFilterValue,filter:{maxPrice,price},clearFilter}=useFilter()
    let temp= [...allData]
    function findData(arg)
    {
        let arr= temp.map((item)=>{
            return [item[arg]]
        })
       let uniqueArr=  ["All",...new Set(arr.flat()) ]
       return uniqueArr
    }
   
     let category= findData('category')
     let company=findData('brand')
    
  return (
      <div className='m-5'>
        <input type='text' placeholder='serarch..' name="text"  onChange={(e)=>{setFilterValue(e)}}/>
        <br/>
        <br/>
        
        <h4>Category</h4>
   
          {category.map((item,i)=>{
            return  <div>  <button style={{backgroundColor:"white",border:"none"}}  onClick={(e)=>{
              setFilterValue(e)
            }}  name="category" value={item}>{item}</button>  </div>
          })}
         
          <br/>
          <h4>company</h4>
         <select name='company' onClick={(e)=>{
                setFilterValue(e) 
         }}>
            {company.map((item,i)=>{
                return <>
                <option value={item} key={i}>{item}</option>
                <option disabled></option>
                        </>
            })}
         </select>


          <br/>
          <h4>Price</h4>
          <input type="range" max={maxPrice}  name="price" value={price} onChange={(e)=>{setFilterValue(e)}}/>
          <br/>
          <button className='btn btn-danger'  onClick={clearFilter}>CLEAR ALL</button>
      </div>
  )
}

export default FilterComp
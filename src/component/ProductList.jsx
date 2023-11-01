import React from "react";
import FilterComp from "./FilterComp";
import SortingComp from "./SortingComp";
import { useFilter } from "../Context/FilterContext";
import Loding from "./commonComp/Loding";
import Productcard from "./commonComp/Productcard";

function ProductList() {
  let { filterData, allData } = useFilter();
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-4">
           {allData.length>0 &&  <FilterComp />}
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col">
                <SortingComp />
              </div>
              <div className="row">
                {filterData.length==0 && <h1>no Match Data</h1>}
                {filterData.length>0 && filterData.map((item)=>{
                    return <Productcard  item={item} key={item.id}/>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;

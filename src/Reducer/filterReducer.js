function filterReducer(state, action) {
  
  switch (action.type) {
    case "SET_FILTER_DATA":
        let x= action.payload.map((data)=>{
            return data.price
          })
          let findMaximumPrice= Math.max(...x)
      return {
        ...state,
        filterData: [...action.payload],
        allData: [...action.payload],
        filter:{...state.filter,price:findMaximumPrice,   maxPrice:findMaximumPrice}
      };
    case "SET_SORTING_VALUE":
      return {
        ...state,
        sorting: action.payload,
      };
    case "SET_SORTING":
      let temp = [...action.payload];
      let newData;
      function sortingValue(a, b) {
        if (state.sorting == "lowest") {
          return a.price - b.price;
        }
        if (state.sorting == "highest") {
          return b.price - a.price;
        }
        if (state.sorting == "A_Z") {
          return a.title
            .trim()
            .toUpperCase()
            .localeCompare(b.title.trim().toUpperCase());
        }
        if (state.sorting == "Z_A") {
          return b.title
            .trim()
            .toUpperCase()
            .localeCompare(a.title.trim().toUpperCase());
        }
      }
      newData = temp.sort(sortingValue);
      return {
        ...state,
        filterData: newData,
      };

      case 'SET_FILTER_VALUE':
        let {name,value}=action.payload.target
        
        return{
            ...state,filter:{...state.filter,[name]:value}
        }
        case "FILTERATION":
            let tempData=[...state.allData]
             if(state.filter.text)
             {
                 tempData=tempData.filter((item)=>{
                    return item.title.trim().toUpperCase().includes(state.filter.text.toUpperCase())
                })
             }
             if(state.filter.category)
             {
                 tempData=tempData.filter((item)=>{
                   if(state.filter.category===item.category)
                   {
                    return item
                   }
                   else if( state.filter.category=="All")
                   {
                    return item
                   }


                 })
             }
             if(state.filter.company)
             {
                tempData=tempData.filter((item)=>{
                      if(state.filter.company==item.brand)
                      {
                        return item
                      }
                      else if( state.filter.company=="All")
                      {
                        return item
                      }
                })
             }
             if(state.filter.price)
             {
                tempData=tempData.filter((item)=>{
                    return item.price <= state.filter.price
                })
             }
            return {...state,filterData:tempData}

            //clear all logic
            case "CLEAR_ALL_FILTER":
                let x1= state.allData.map((data)=>{
                    return data.price
                  })
                  let findMaximumPrice1= Math.max(...x1)
                return {
                    ...state,filter:{
                        text: "",
                        category: "",
                        company: "",
                        maxPrice:findMaximumPrice1,
                        minPrice:0,
                        price:findMaximumPrice1
                    }
                }

    default:
      return { ...state, filterData: tempData };
  }
}

export default filterReducer;

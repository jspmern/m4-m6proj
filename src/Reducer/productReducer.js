 

function productReducer(state,action) {
    switch (action.type) {
        case "LODING":
            return {...state,isLoding:true}
         case "FETCH_DATA":
            return {...state,data:action.payload,isLoding:false}
            case "FETCH_ERROR":
                return {...state,isLoding:false,error:action.payload}
                case "SINGLE_LOADING":
                    return {
                        ...state,isSingleLoading:true
                    }
                    case "SINGLE_FETCH":
                        return{
                            ...state,isSingleLoading:false,
                            singleProduct:action.payload
                        }
                        case "SINGLE_ERROR":
                        return {
                            ...state,isSingleLoading:false,error:action.payload
                        }
        default:
            return state
    }
   
}

export default productReducer
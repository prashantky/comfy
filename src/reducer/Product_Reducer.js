import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
   GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    // GET_SINGLE_PRODUCT_BEGIN,
    // GET_SINGLE_PRODUCT_SUCCESS,
    // GET_SINGLE_PRODUCT_ERROR,
  } from '../action'
  
 export const initialState={
    isOpen:true,
    products:[],
    feature_products:[],
    isLoading:true,
   products_error:false

}

  const Products_Reducer = (state, action) => {

    switch(action.type){
    case SIDEBAR_OPEN:
        console.log("lol from open",action.type)
    return{
        ...state,
        isOpen:true
    }
    case SIDEBAR_CLOSE:
    return{
        ...state,
        isOpen:false
    }
    case GET_PRODUCTS_BEGIN:
      return{
          ...state,
          isLoading:true
      }
      case GET_PRODUCTS_SUCCESS:
        console.log("hey i just called from user",action)
        const feature_products=action.payload.filter((product)=>product.featured===true);
  
        // console.log("hey i just called from user",feature_products)

        return{
            ...state,
            isLoading:false,
            feature_products,
            products:action.payload
            
          
        }
    
        case GET_PRODUCTS_ERROR:
          return{
              ...state,
              isLoading:false,
              products_error:true
          }
        
    default :
     return state
  }
}
  
  export default Products_Reducer
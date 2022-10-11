import React, { useEffect, useContext, useReducer } from 'react'
import Filter_reducer , { initialState }  from '../reducer/Filter_Reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from './../action'
import { useProductsContext } from './../context/products-context'
//import Products_Reducer, { initialState } from "../reducer/Product_Reducer";




const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Filter_reducer, initialState);
    const {products}=useProductsContext()
    //console.log('>>>>>>right from ducts',products)
    useEffect(()=>{
        dispatch({
            type: LOAD_PRODUCTS,
            payload:products
          }); 
    },[products])

    useEffect(()=>{
      dispatch({
          type: SORT_PRODUCTS,
      }); 
  },[products,state.sort])

    const UpdateOptions=(e)=>{
      const value=e.target.value
     //console.log("hello fom doc",valueOptions)
      dispatch({
        type:UPDATE_SORT,
        payload:value
      })


    }
    
  return (
    <FilterContext.Provider value={{...state, UpdateOptions}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
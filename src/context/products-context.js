import React, { useContext, createContext, useReducer, useEffect } from "react";
import Products_Reducer, { initialState } from "../reducer/Product_Reducer";
import { products_url as url } from "../utils/constants";
import axios from "axios";

//import { Children } from 'react/cjs/react.production.min'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  // GET_SINGLE_PRODUCT_BEGIN,
  // GET_SINGLE_PRODUCT_SUCCESS,
  // GET_SINGLE_PRODUCT_ERROR
} from "../action";

const ProductsProvider = createContext();


export const ProductsStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Products_Reducer, initialState);

  const OpenSidebar = () => {
    dispatch({
      type: SIDEBAR_OPEN
    });
  };
  const CloseSidebar = () => {
    dispatch({
      type: SIDEBAR_CLOSE
    });
  };

  const fetchData = async (url) => {
    dispatch({
      type: GET_PRODUCTS_BEGIN
    });

    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: products
      });
    } catch {
      dispatch({
        type: GET_PRODUCTS_ERROR
      });
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <ProductsProvider.Provider value={{ ...state, OpenSidebar, CloseSidebar }}>
      {children}
    </ProductsProvider.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsProvider);

// // setup data layer
// // we need this to track the basket
// import React, { createContext, useContext, useReducer } from "react";
// //This is the data layer
// export const StateContext = createContext()
// //Build a provider
// export const StateProvider = ({reducer, initialState, children}) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// )
// //This is how we use it inside of a component
// export const useStateValue = () => useContext(StateContext)

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProductsStateProvider}  from './context/products-context'
import { FilterProvider } from './context/filter_context';
//import Products_Reducer,{initialState }from '../src/reducer/Product_Reducer'

ReactDOM.render(
  <ProductsStateProvider  >
    <FilterProvider>
    <App />
    </FilterProvider>
    
  </ProductsStateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

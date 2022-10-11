import React from 'react'
import styled from 'styled-components'
//import { Filters, ProductList, Sort, PageHero } from '../components'
import {Filter} from "../components/filter/Filter"
import  {ProductList}  from '../components/productlist/ProductList'
const ProductsPage = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='d-flex'>
          <div className='row'>
            <div className="col-4">
              <Filter/>
            </div>
          </div>
          <div className="col-8">
              <ProductList/>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}



export default ProductsPage

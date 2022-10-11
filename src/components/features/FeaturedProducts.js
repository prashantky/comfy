import React from 'react'
import {useProductsContext} from "./../../context/products-context"
import Error from './../../pages/error/ErrorPage'
import {Loading} from './../loading/Loading'
import {Product} from './../../components/product/Product'

export const FeaturedProducts = () => {
  const {feature_products,isLoading, products_error}=useProductsContext()
if(isLoading){
  return <Loading />
}
if(products_error){
  return <Error/>
}
  return (
    <>
    <div className='main-featured'>
      {
        feature_products.slice(0,3).map((item)=>{
          return <Product id={item.id} {...item}/>
        })
      }
    </div>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import {formatPrice} from "./../../utils/helpers"
export const Product = ({image,price,id}) => {
    console.log("product hey",price)
  return (
    <div>
        <img src={image} alt=""/>
        <Link to={`/products/${id}`} className="link">
            <FaSearch/>
        </Link>
        <h2>{formatPrice(price)}</h2>
    </div>
  )
}

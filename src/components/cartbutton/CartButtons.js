import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useProductsContext} from "./../../context/products-context"

//import styled from 'styled-components'
//import { useProductsContext } from '../context/products_context'
//import { useCartContext } from '../context/cart_context'
//import { useUserContext } from '../context/user_context'
import "./CartButton.css"
const CartButtons = () => {
  const {CloseSidebar}=useProductsContext()

  return <div className="Wrapper">
  <div className="cart-btn">
    <Link to="/cart"  onClick={CloseSidebar}>Cart
    <span className='cart-container'><FaShoppingCart/>
    <span className='cart-value'>12</span></span>
    </Link>
    <button type="button" className='auth-btn'>Login <FaUserPlus/></button>
  </div>
</div>
}

export default CartButtons

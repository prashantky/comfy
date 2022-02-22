import React,{useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import logo from "./../../assets/logo.svg"
import {useProductsContext} from "./../../context/products-context"
import {links} from "../../utils/constants"
import { Link } from 'react-router-dom'
import {
  SIDEBAR_CLOSE,
  
} from '../../action'


import CartButtons from '../cartbutton/CartButtons'
import "./Sidebar.css"
export const Sidebar = () => {
  const {CloseSidebar,isOpen}=useProductsContext()

  
  

  return (
    <div className='SidebarMain'>
      <aside className={`${isOpen?"sidebar show-sidebar":"sidebar"}`}>
        <div className='sidebar-header'>
          <img src={logo} className="logo" alt=""/>
          <button type='button' className='close-btn' onClick={CloseSidebar} ><FaTimes/></button>
        </div>
        <ul className="links">
         {links.map((item)=>{
             const {id,url,text}=item
          return(<><li key={id}><Link to={url} onClick={CloseSidebar} >{text}</Link></li></>)
          
         })} 
               <li>  <Link to="/checkout" onClick={CloseSidebar} >Checkout</Link></li>

        </ul>
        <CartButtons/>
      </aside>
    </div>
  )
}

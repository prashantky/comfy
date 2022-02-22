import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import logo from "./../assets/logo.svg"
import {useProductsContext} from "./../context/products-context"
import {
  SIDEBAR_OPEN,
  
} from './../action'

import {FaBars} from "react-icons/fa"
import {links} from "./../utils/constants"
import "./Navbar.css"
import CartButtons from "./cartbutton/CartButtons";
const Navbar = () => {
  console.log("hello mqan",useProductsContext()
  )
  const {OpenSidebar}=useProductsContext()

    

  return (
    <>
       <div className="NavContainer" >
      <div className="nav-center">
          <div className="nav-header">
          <Link to="/"><img src={logo}  alt="dot"/></Link>
          <button type="button" className="nav-toggle" onClick={OpenSidebar}><FaBars/></button>
          <ul className="nav-links">
         {links.map((item)=>{
             const {id,url,text}=item
          return(<><li key={id}><Link to={url}>{text}</Link></li></>)
          
         })} 
        </ul>
        <CartButtons/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar

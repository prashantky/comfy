import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { single_product_url } from '../../utils/constants'
import { FaCheck } from 'react-icons/fa'
//import { FaCheck } from 'react-icons/fa'
//import { useCartContext } from '../context/cart_context'
import AmountButtons from './../amountbuttons/AmountButtons'
import "./AddToCart.css"
const AddToCart = ({singleProducts}) => {
    const {stars,stock,colors=[]}=singleProducts
    const [colorChange,setColorChange]=useState(colors[0])
const [amount,setAmount]=useState(1)
    console.log("hhhhhh>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",amount)
    const increase=()=>{
      setAmount((old)=>{
      let tempamount=old+1
      if(tempamount > stock){
        tempamount=stock

      }
      return tempamount
      }
      )

    }
    const decrease=()=>{
      setAmount((old)=>{
      let tempamount=old-1
      if(tempamount <1){
        tempamount=1

      }
      return tempamount
      }
      )

    }
    
  return (
    <>
      <h3>AddToCart</h3>
      <div className="color">
        <span>Colors:</span>
        <div className="">
          {colors.map((color, i) => {
            return (
              <>
                <button
                  key={i}
                  onClick={() => {
                    setColorChange(colors[i]);
                  }}
                  style={{ background: color }}
                  className={`${colorChange===color?"color-btn active":"color-btn"}`}
                >
                  {colorChange===color?<FaCheck/>:null}
                </button>
              </>
            );
          })}
        </div>
        <div className='btn-container'>
          <AmountButtons increase={increase} decrease={decrease} amount={amount} text="lol"/>
          <Link to="/checkout" className='link'>add to cart</Link>

      </div>
      </div>
      
    </>
  );
}


export default AddToCart
import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'
import "./AmountButtons.css"
const AmountButtons = ({increase,decrease,amount}) => {
  
    
  return <>
  <div className='main'>
      <div className=''><button onClick={increase}><FaPlus /></button></div>
      <span>{amount}</span>
      <div className=''><button onClick={decrease}><FaMinus/></button></div>
  </div>
  </>
}


export default AmountButtons
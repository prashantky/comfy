
import React, { useState, useRef,useEffect } from 'react';

import "./Contact.css"
export const Contact = () => {
  const inputRef = useRef();
useEffect(()=>{
  inputRef.current.focus();

})
  return(
    <>
  <div className='main-contact'>
    <div className='contact-header '>
      <h3>Join our newsletter and get 20% off</h3>
      <div className='contant-main-input d-flex '>
        <p>hello  goono happy by ths</p>
        <form className='contact-form' action="https://formspree.io/f/moqrdpzy"
  method="POST">

          <input type="email" placeholder="Enter your mail" className='form-input' ref={ inputRef} name="email"/>
          <button type="submit" className='submit-btn'>Subscribe</button>
          </form>

        </div>
      </div>
    </div>
  
    </>
  )
  
}

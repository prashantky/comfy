import React from 'react'
import styled from 'styled-components'
import "./ErrorPage.css"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return <div className='WrapperError page-100'>
  <h1>404</h1>
  <h3>Page is not found</h3>
<Link to="/" className='btn'>Back to Home</Link>
  </div>
}


export default ErrorPage

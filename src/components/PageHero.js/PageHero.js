import React from 'react'
import { Link } from 'react-router-dom'
export const PageHero = ({title}) => {
  return (
    <div>
<div className='main'>
    <Link to="/">Home</Link>{title}
</div>

    </div>
  )
}

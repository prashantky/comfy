import React from 'react'
import { useFilterContext} from "./../../context/filter_context"

export const ProductList = () => {
 
  const { sort,filter_products,UpdateOptions }= useFilterContext()
console.log("hello from list",filter_products)
  return (
    <div className='container'>
      <div className='row'>

        <form>
          <label htmlFor='sort'>Sort</label>
          <select name="sort" id="sort" onChange={UpdateOptions} value={sort}>
            <option  value='price-lowest'>price-(lowest)</option>
            <option value='price-highest'>price-(highest)</option>

            <option value='name-a'>name-(a-z)</option>
            <option value='name-z'>name-(z-a)</option>

          </select>
        </form>
        <div className='d-flex'>
          <div className='row'>
{
  filter_products?.map((item,i)=>{
    return(
      <>
      
      <div className='col-4'>
        <img src={item.image} alt={i}/>
        <span>{item.price}</span>
        <span>{item.descriptions}</span>
       <p><span>{item.name}</span>
</p> 


      </div>
      
      </>
    )
  })
}
          </div>
          </div>
          </div>
      </div>
  )
}

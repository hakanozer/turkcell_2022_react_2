import React from 'react'
import { NavLink } from 'react-router-dom'

function Product() {
  return (
    <div>
        <div>
          <NavLink to='/'>Home</NavLink> | <NavLink to='/product'>Product</NavLink> | <NavLink to='/settings'>Settings</NavLink>
        </div>
        Product
    </div>
  )
}

export default Product
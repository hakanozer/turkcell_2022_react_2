import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <h1>Site Title</h1>
        <NavLink to='/'>Home</NavLink> | <NavLink to='/product'>Product</NavLink> | <NavLink to='/settings'>Settings</NavLink>
    </div>
  )
}

export default NavBar
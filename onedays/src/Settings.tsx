import React from 'react'
import { NavLink } from 'react-router-dom'

function Settings() {
  return (
    <div>
        <div>
          <NavLink to='/'>Home</NavLink> | <NavLink to='/product'>Product</NavLink> | <NavLink to='/settings'>Settings</NavLink>
        </div>
        Settings
    </div>
  )
}

export default Settings
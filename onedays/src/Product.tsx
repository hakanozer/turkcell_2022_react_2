import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'

function Product() {

  const links = [
    { id: 10, title: 'Buzdolabı' },
    { id: 15, title: 'TV' },
    { id: 20, title: 'Tablet' },
    { id: 25, title: 'Telefon' },
    { id: 30, title: 'Bisiklet' },
  ]  


  return (
    <div>
        <NavBar/>
        Product
    </div>
  )
}

export default Product
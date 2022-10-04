import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'

function Product() {

  const links = [
    { id: 10, title: 'Buzdolabı' },
    { id: 15, title: 'TV' },
    { id: 20, title: 'Tablet' },
    { id: 25, title: 'Telefon' },
    { id: 30, title: 'Bisiklet' },
  ]  

  const navigate = useNavigate()
  const sendParams = (item:any) => {
      navigate('/detail/'+item.id, { state: item })
  }

  return (
    <div>
        <NavBar/>
        <h1>Products</h1>
        <ul>
          { links.map((item, index) =>  
            <li key={index}> <NavLink to={'/detail/'+item.id}  >{ item.title }</NavLink>  </li>
          )}
        </ul>
        <hr></hr>
        <ul>
          { links.map((item, index) =>  
            <li key={index} onClick={ () => sendParams(item) } > { item.title } </li>
          )}
        </ul>
    </div>
  )
}

export default Product
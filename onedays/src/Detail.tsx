import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import NavBar from './components/NavBar'

function Detail() {

  const { id } = useParams()
  const [ params, setParams ] =  useSearchParams()
  console.log( id );
  console.log( params.get("cat") )
  console.log( params.get("kat") )

  // pull object
  const location = useLocation()
  console.log( location.state );
  
  

  return (
    <div>
        <NavBar/>
        <h2> { id } </h2>
        Detail
    </div>
  )

}

export default Detail
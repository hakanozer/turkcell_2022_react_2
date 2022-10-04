import React from 'react'
import { control } from './util'
import {  Navigate } from 'react-router-dom'

function Security( item: { component: JSX.Element } ) {

  const user = control()   
  return (
    
    user === null
    ?
    <Navigate to='/' replace />
    :
    item.component

  )


}

export default Security
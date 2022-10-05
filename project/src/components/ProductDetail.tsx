import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProBilgiler } from '../models/IProduct'

function ProductDetail() {

  const location = useLocation() 
  const navigate = useNavigate()

  const [item, setItem] = useState<ProBilgiler>({})
  useEffect(() => {
    if ( location.state ) {
        const itm = location.state as ProBilgiler
        setItem(itm)
      }else {
        navigate('/dashboard')
      }
  }, [])
  

  return (
    <>
        { item &&
            <h2> { item.productName } </h2>
        }
    </>
  )
}

export default ProductDetail
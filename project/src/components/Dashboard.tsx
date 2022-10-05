import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProBilgiler } from '../models/IProduct'
import { allProduct } from '../services'


function Dashboard() {

  const [proArr, setProArr] = useState<ProBilgiler[]>([])
  useEffect(() => {
    toast.loading('Products Loading...')
    allProduct().then( res => {
      const arr = res.data.Products[0].bilgiler
      setProArr( arr )
      toast.dismiss()
    })

  }, [])

  const navigate = useNavigate()
  const gotoDetail = ( index:number ) => {
    navigate('/productDetail', { state: proArr[index] } )
  }

   
  return (
    <>
      <h2> Products </h2>
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Pid</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brief</th>
        </tr>
      </thead>
      <tbody>

      { proArr.map(( item, index ) => 
        <tr key={index} role='button' onClick={ () => gotoDetail(index) } >
          <th>{ item.productId }</th>
          <td>
            <img src={ item.images![0].thumb } className='img-thumbnail' />
          </td>
          <td>{ item.productName }</td>
          <td>{ item.price }</td>
          <td>{ item.brief }</td>
        </tr>
      )}

        
      </tbody>
    </table>

      
    </>
  )
}

export default Dashboard
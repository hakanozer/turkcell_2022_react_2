import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { OrderList } from '../models/IOrder'
import { orders } from '../services'
import { StateType } from '../useRedux/store'

function Product() {

  const arr = useSelector( (item: StateType) => item.OrderReducer )
  /*
  const [arr, setArr] = useState<OrderList[]>([])
  useEffect(() => {
    const order = orders()
    if ( order ) {
      order.then(res => {
        const orderData = res.data.orderList
        if ( typeof orderData !== 'boolean' ) {
            setArr( orderData )
        }
      })
    } 
  }, [])
  */
  

  return (
    <>
      <h2>Orders</h2>
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

      { arr.map(( item, index ) => 
        <tr key={index} >
          <th>{ item.id }</th>
          <td>
            <img src={ item.thumb } className='img-thumbnail' />
          </td>
          <td>{ item.urun_adi }</td>
          <td>{ item.fiyat }</td>
          <td>{ item.kisa_aciklama }</td>
        </tr>
      )}

        
      </tbody>
    </table>

    </>
  )
}

export default Product
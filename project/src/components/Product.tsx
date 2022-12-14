import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { OrderList } from '../models/IOrder'
import { orders } from '../services'
import { IUserContext, UserContext } from '../UserContext'
import { StateType } from '../useRedux/store'
import AppTitle from './inc/AppTitle'

function Product() {

  const arr = useSelector( (item: StateType) => item.OrderReducer )
  const search = useSelector( (item: StateType) => item.SearchReducer)  
  
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
  
  const [proArr, setProArr] = useState<OrderList[]>([])
  //const [oldArr, setOldArr] = useState<OrderList[]>([])

  useEffect(() => {

      setProArr( arr )
      //setOldArr( arr ) 
    
      const lSearch = search.toLowerCase()
      const newArr = arr.filter(item => 
        item.urun_adi?.toLowerCase().includes(lSearch) ||
        item.kisa_aciklama?.toLowerCase().includes(lSearch) ||
        item.fiyat?.includes(lSearch)
      )
      if ( search.length > 0 )
      setProArr( newArr )
    
  }, [arr, search])

    // useContext
    const { data, setData } = useContext(UserContext)
    useEffect(() => {
      const sendItem: IUserContext = {
        title: 'Products Title',
        color: '#fcba03'
      }
      setData(sendItem)
    }, [])
  

  return (
    <>
    <Helmet>
        <title>Order List</title>
        <meta name='description' content='E-Commers - Order List'></meta>
    </Helmet>
      <AppTitle title='Orders' />
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
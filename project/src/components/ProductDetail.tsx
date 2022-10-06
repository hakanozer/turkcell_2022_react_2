import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProBilgiler } from '../models/IProduct'
import { addBasket, orders } from '../services'
import { IOrderAction } from '../useRedux/reducers/OrderReducer'
import { OrderType } from '../useRedux/types/OrderType'

function ProductDetail() {

  const location = useLocation() 
  const navigate = useNavigate()

  const [item, setItem] = useState<ProBilgiler>({})
  const [bigImage, setBigImage] = useState('')
  useEffect(() => {
    if ( location.state ) {
        const itm = location.state as ProBilgiler
        setItem(itm)
        setBigImage( itm.images![0].normal )
      }else {
        navigate('/dashboard')
      }
  }, [])
  
  const dispatch = useDispatch()
  const fncAddBasket = ( productId: string ) => {
    const basket = addBasket(productId)
    if ( basket ) {
        basket.then(res => {
            const status = res.data.order[0].durum
            if ( status ) {
                toast.success('Add Basket Success')
                const order = orders()
                if ( order ) {
                  order.then( orderRes => {
                    const orderData = orderRes.data.orderList
                    if ( typeof orderData !== 'boolean' ) {
                        const itemAction: IOrderAction = {
                          type: OrderType.ORDER_LIST,
                          payload: orderData
                        }
                        dispatch(itemAction)            
                    }
                  })
                }
            }
        })
    }
  }

  return (
    <>
        { item &&
        <>
            <h2> { item.productName } </h2>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='mb-3'>
                        <img src={ bigImage } className='img-fluid' />
                    </div>
                    
                    <div>
                        { item.images?.map( (item, index) =>
                            <img onClick={()=> setBigImage(item.normal)} role='button' key={index} src={ item.thumb } className='img-thumbnail m-1' />
                        )}
                    </div>
                </div>
                <div className='col-sm-6'>
                    <h2><span className="badge bg-secondary">{ item.price } ₺</span></h2>
                    <div className="content" dangerouslySetInnerHTML={{__html: item.description! }}></div>
                    <button onClick={() => fncAddBasket( item.productId! )} className='btn btn-success'><i className="bi bi-cart2"></i> Add Basket</button>
                </div>
            </div>    
        </>
        }
        
    </>
  )
}

export default ProductDetail
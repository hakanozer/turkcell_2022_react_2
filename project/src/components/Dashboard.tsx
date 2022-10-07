import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProBilgiler } from '../models/IProduct'
import { allProduct } from '../services'
import AppTitle from './inc/AppTitle'


function Dashboard() {

  const [search, setSearch] = useState('')
  const [proArr, setProArr] = useState<ProBilgiler[]>([])
  const [oldArr, setOldArr] = useState<ProBilgiler[]>([])
  useEffect(() => {
    toast.loading('Products Loading...')
    allProduct().then( res => {
      const arr = res.data.Products[0].bilgiler
      setProArr( arr )
      setOldArr( arr )
      toast.dismiss()
    })

  }, [])

  const navigate = useNavigate()
  const gotoDetail = ( index:number ) => {
    navigate('/productDetail', { state: proArr[index] } )
  }


  useEffect(() => {
    const lSearch = search.toLowerCase()
    const newArr = oldArr.filter(item => 
      item.productName?.toLowerCase().includes(lSearch) ||
      item.brief?.toLowerCase().includes(lSearch) ||
      item.price?.includes(lSearch)
    )
    setProArr( newArr )
  },[search])
  
   
  return (
    <>
    <Helmet>
        <title>Product List</title>
        <meta name='description' content='E-Commers - Product List'></meta>
    </Helmet>
      <AppTitle title='Products' />
      <div className='mb-2 mt-2'>
        <input onChange={(evt) => setSearch(evt.target.value)} type='search' className='form-control' placeholder='Search..' />
      </div>
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
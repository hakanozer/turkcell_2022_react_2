import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// imports components
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Security from './Security'
import {  objContext, UserContext } from './UserContext'
import { store } from './useRedux/store'
import { control } from './util'


export const routes = 
<Provider store={store}>
    <UserContext.Provider value={objContext}>
        <BrowserRouter>
            <ToastContainer/>
            <Routes>
                <Route path='' element={ control() === null ? <Login/> : <Navigate to={ localStorage.getItem('url') !== null ? localStorage.getItem('url')! : '/dashboard' } replace />} ></Route>
                <Route path='/dashboard' element={  <Security component={ <Dashboard/> } />   } />
                <Route path='/orders' element={  <Security component={ <Product /> } />   } />
                <Route path='/productDetail' element={  <Security component={ <ProductDetail/> } />   } />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
</Provider>

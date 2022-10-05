import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// imports components
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Product from './components/Product'
import Security from './Security'
import { control } from './util'


export const routes = 
<BrowserRouter>
    <Routes>
        <Route path='' element={ control() === null ? <Login/> : <Navigate to={ localStorage.getItem('url') !== null ? localStorage.getItem('url')! : '/dashboard' } replace />} ></Route>
        <Route path='/dashboard' element={  <Security component={ <Dashboard/> } />   } />
        <Route path='/product' element={  <Security component={ <Product/> } />   } />
    </Routes>
</BrowserRouter>

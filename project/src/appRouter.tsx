import { BrowserRouter, Routes, Route } from 'react-router-dom'

// imports components
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Product from './components/Product'
import Security from './Security'


export const routes = 
<BrowserRouter>
    <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='/dashboard' element={  <Security component={ <Dashboard/> } />   } />
        <Route path='/product' element={  <Security component={ <Product/> } />   } />
    </Routes>
</BrowserRouter>

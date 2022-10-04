import { BrowserRouter, Routes, Route } from 'react-router-dom'

// imports components
import Dashboard from './components/Dashboard'
import Login from './components/Login'

export const routes = 
<BrowserRouter>
    <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
</BrowserRouter>

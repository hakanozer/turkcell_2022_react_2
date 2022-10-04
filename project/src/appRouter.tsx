import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

export const routes = 
<BrowserRouter>
    <Routes>
        <Route path='' element={<Login/>}></Route>
    </Routes>
</BrowserRouter>

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Home from './Home';
import Product from './Product';
import Settings from './Settings';

const routes = 
<BrowserRouter>
  <Routes>
    <Route path='' element={<Home />}  />
    <Route path='/product' element={<Product />} />
    <Route path='/settings' element={<Settings/>} />
  </Routes>
</BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( routes );


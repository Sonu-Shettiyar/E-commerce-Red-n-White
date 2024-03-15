import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    )

}

export default AllRoutes;
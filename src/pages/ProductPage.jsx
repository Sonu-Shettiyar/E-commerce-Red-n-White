import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios';
import { useProductContext } from '../context/ProductContext';
const ProductPage = () => {
    const { productData } = useProductContext();

    return (
        <div id='product-list'>
            {productData?.map((product) => <ProductCard key={product?._id} {...product} />)}
        </div>
    )
}

export default ProductPage
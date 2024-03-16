import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios';
import { useProductContext } from '../context/ProductContext';
import Navbar from '../components/Navbar';
import { Spin } from 'antd';
const ProductPage = () => {
    const { productData } = useProductContext();

    return (
        <>
            <Navbar />
            {productData.length === 0 ? <div className='spinner-div'>
            <Spin tip="" size="large">
        <div className="content" >Loading...</div>
      </Spin>
          </div>:  <div id='product-list'>
                {productData?.map((product) => <ProductCard key={product?._id} {...product} />)}
            </div>}
        </>
    )
}

export default ProductPage
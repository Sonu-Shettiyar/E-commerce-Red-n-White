import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();
const Base_URL = 'http://localhost:3000/';
const ProductContextProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    const [cartProductData, setCartProductData] = useState([]);
    const [isError, setIsError] = useState(false);
    const getProductData = async () => {
        try {
            const res = await axios(Base_URL + 'products');
            setProductData(res.data);
        } catch (error) {
            console.error(error)
            setIsError(true)
        }
    }
    const getCartProductData = async () => {
        try {
            const res = await axios(Base_URL + 'cart');
            setCartProductData(res.data);
        } catch (error) {
            console.error(error)
            setIsError(true)
        }
    }
    const handleAddCartItem = async (payload) => {
        try {
            const response = await axios.post(Base_URL + 'cart', payload);
            alert(response.data.message)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getProductData();
    }, [])

    useEffect(() => {
        getCartProductData();
    }, [handleAddCartItem])
    
    return (
        <ProductContext.Provider value={{ productData, setProductData, isError, cartProductData, handleAddCartItem }}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProductContext = () => useContext(ProductContext);

export default ProductContextProvider
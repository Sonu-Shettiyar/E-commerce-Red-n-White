import { notification } from 'antd';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();
const Base_URL = 'http://localhost:3000/';
const ProductContextProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    const [cartProductData, setCartProductData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (type, message) => {
        api[type]({
            message,
            placement: 'topRight',
        });
    };
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
            openNotification('success', response.data.message)
        } catch (error) {
            console.log(error, 'error')
            openNotification('error', error?.response?.data?.message || 'Something Went Wrong...')
        }
    }

    const handleCartItemDelete = async (id) => {
        try {
            await axios.delete(Base_URL + 'cart/' + id)
            getCartProductData();
            openNotification('success', 'Item Removed Succesfully')
        } catch (error) {
            console.log(error, 'error')
            openNotification('error', error?.response?.data?.message || 'Something Went Wrong...')
        }
    }
    const handleQuantityUpdate = async (id, value) => {
        try {
            await axios.patch(Base_URL + 'cart/' + id, { quantity: value })
            getCartProductData()
        } catch (error) {
            console.log(error, 'error')
            openNotification('error', error?.response?.data?.message || 'Something Went Wrong...')
        }
    }
    useEffect(() => {
        getProductData();
    }, [])


    return (
        <ProductContext.Provider value={{ productData, setProductData, isError, cartProductData, handleAddCartItem, handleCartItemDelete, getCartProductData, openNotification, handleQuantityUpdate }}>
            {contextHolder}            {children}
        </ProductContext.Provider>
    )
}
export const useProductContext = () => useContext(ProductContext);

export default ProductContextProvider
import { notification } from 'antd';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();
const Base_URL = import.meta.env.VITE_BASE_URL;
function getStars(rating) {
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const halfStars = roundedRating - fullStars > 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (halfStars === 1) {
        stars += '½';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }

    return stars;
}
const ProductContextProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    const [cartProductData, setCartProductData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (type, message) => {
        api[type]({
            message,
            placement: 'topRight',
            duration: 0.5,
        });
    };
    const sendOrderPlacedMessage = () => {
        openNotification('success', 'Order Placed Succesfully...');
    }
    const getProductData = async (category = '') => {
        try {
            const res = await axios(Base_URL + `products?category=${category}`);
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
            getCartProductData();
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
        getCartProductData();
    }, [])


    return (
        <ProductContext.Provider value={{ productData, isError, cartProductData, handleAddCartItem, handleCartItemDelete, sendOrderPlacedMessage,getProductData, getCartProductData, openNotification, handleQuantityUpdate, getStars }}>
            {contextHolder}
            {children}
        </ProductContext.Provider>
    )
}
export const useProductContext = () => useContext(ProductContext);

export default ProductContextProvider
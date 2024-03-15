import React from 'react'
import { useProductContext } from '../context/ProductContext';
import CartItems from '../components/CartItems';

const CartPage = () => {
    const { cartProductData } = useProductContext();
    return (
        <div id='product-list'>
            {cartProductData?.map(({ _id, product }) => <CartItems key={_id} {...product} />)}
        </div>
    )
}

export default CartPage;
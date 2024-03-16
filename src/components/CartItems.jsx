import { Button } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
import { useProductContext } from '../context/ProductContext';
import { DeleteFilled } from '@ant-design/icons';



const CartItems = (data) => {
    const { handleCartItemDelete, handleQuantityUpdate,getStars } = useProductContext();
    const { category, title, description, price, oldPrice, rating, image, inStock, _id, cartId, quantity } = data;
    return (
        <div className='cart-item bg' >
            <div>
                <img src={image} width={'150px'} alt={title} />
            </div>
            <div>
                <h3>{title?.substring(0, 35)}</h3>
                <p>{description?.substring(0, 50)}</p>

                <p className='rating'>
                    {getStars(rating)}
                </p>
                <div>
                    <p>
                        <s style={{ fontSize: 'medium' }}>${oldPrice}</s>
                        <span style={{ fontSize: 'larger' }}> {"  $" + price}</span>
                    </p>
                </div>
                <div className='cart-btns'>
                    <div>
                        <button type='button' onClick={() => handleQuantityUpdate(cartId, quantity - 1)} disabled={quantity === 1}>-</button>
                        <input style={{ width: '20px' }} value={quantity} />
                        <button onClick={() => handleQuantityUpdate(cartId, quantity + 1)}>+</button>
                    </div>

                    <Button type='link' icon={<DeleteFilled />} onClick={() => handleCartItemDelete(cartId)}>REMOVE</Button>
                </div>
            </div>

        </div>
    )
}

export default CartItems;
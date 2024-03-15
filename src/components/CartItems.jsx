import { Button } from 'antd'
import axios from 'axios';
import React from 'react'
import { useProductContext } from '../context/ProductContext';
const Base_URL = 'http://localhost:3000/';

const CartItems = (data) => {

    const { Category, title, description, price, oldPrice, rating, image, inStock, _id } = data;

    return (
        <div className='cart-items' >
            <div>
                <img src={image} width={'40%'} />
            </div>
            <div>
                <h3>{title.substring(0, 35)}</h3>
                <p>{description.substring(0, 50)}</p>


            </div>
            <div>
                <p>
                    Price: $ <s>{oldPrice}</s>
                    {" " + price}
                </p>
            </div>
         
        </div>
    )
}

export default CartItems;
import { Button } from 'antd'
import axios from 'axios';
import React from 'react'
const Base_URL = 'http://localhost:3000/';

const ProductCard = (data) => {

    const { Category, title, description, price, oldPrice, rating, image, inStock, _id } = data;

    const handleAddCartItem = async (payload) => {
        try {
            const response = await axios.post(Base_URL + 'cart', payload);
            alert(response.data.message)
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div className='product-card' >
            <div>
                <img src={image} width={'10%'} />
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
            <div>
                <Button style={{ width: '100%' }} type='primary' onClick={() => handleAddCartItem({ product: _id })}>ADD TO CART</Button>
            </div>
        </div>
    )
}

export default ProductCard;
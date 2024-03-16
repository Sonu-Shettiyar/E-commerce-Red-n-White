import { Button } from 'antd'
import React from 'react'
import { useProductContext } from '../context/ProductContext';

const ProductCard = (data) => {

    const { category, title, description, price, oldPrice, rating, image, inStock, _id } = data;
    const { handleAddCartItem, getStars } = useProductContext();

    return (
        <div className='product-card' >
            <div>
                <img src={image} width={'10%'} />
            </div>

            <div>
                <h3>{title.substring(0, 35)}</h3>
                <p>{description.substring(0, 35)}</p>
            </div>

            <div>
                <div className='center-div'>
                    <p>
                        {rating}
                        <span className='rating'>
                            {' ' + getStars(rating)}
                        </span>
                    </p>
                    <span style={{ fontSize: 'small' }}>{category.toUpperCase()}</span>
                </div>
                <div className='center-div'>
                    <p>
                        Price: $ <s>{oldPrice}</s>
                        {" " + price}
                    </p>
                    <p>In Stock:{inStock}</p>

                </div>

            </div>

            <div>
                <Button style={{ width: '100%' }} type='primary' onClick={() => handleAddCartItem({ product: _id })}>ADD TO CART</Button>
            </div>
        </div>
    )
}

export default ProductCard;
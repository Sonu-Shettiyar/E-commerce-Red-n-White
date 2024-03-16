import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

const Navbar = () => {
    const { getProductData, cartProductData } = useProductContext();

    return (
        <div id='navbar'>
            <div>
                <Link to={'/'} onClick={() => getProductData()} style={{ textDecoration: 'none' }}>
                    <h1>R&W</h1>
                </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div id='category-btns'>

                    <Button onClick={() => getProductData('mens')} type='primary'>Men</Button>
                    <Button onClick={() => getProductData('womens')} type='primary'>Women</Button>
                    <Button onClick={() => getProductData('jewellery')} type='primary'>Jewellery</Button>
                    <Button onClick={() => getProductData('electronics')} type='primary'>Electronics</Button>
                </div>
                <div id='cart-icon'>
                    <Link to='/cart'>
                        <ShoppingCartOutlined style={{ fontSize: '35px' }} />
                    </Link>
                    <div>{cartProductData.length}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
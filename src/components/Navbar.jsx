import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 2% ', border: '1px solid red', alignItems: 'center' }}>
            <div>
                <Link to={'/'}>
                <h2>E-Commerce</h2>
                </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', marginRight: '20px', alignItems: 'center' }}>

                    <Button type='primary'>Men</Button>
                    <Button type='primary'>Women</Button>
                    <Button type='primary'>Jewellery</Button>
                    <Button type='primary'>Electronics</Button>
                </div>
                <div >
                    <Link to='/cart'>
                    <ShoppingCartOutlined style={{ fontSize: '35px'}} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar'>
            <div>
                <Link to={'/'} style={{textDecoration:'none'}}>
                <h1>R&W</h1>
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
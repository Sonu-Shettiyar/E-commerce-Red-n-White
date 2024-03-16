import React, { useEffect, useState } from 'react'
import { useProductContext } from '../context/ProductContext';
import CartItems from '../components/CartItems';
import { Button, Empty, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartPage = () => {
    const { cartProductData, getCartProductData } = useProductContext();
    const [totalAmount, setTotalAmount] = useState(0);
    const [oldPriceSum, setOldPriceSum] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const handleCartCalculation = async () => {

        let sum = 0;
        let totalItems = 0
        let oldPriceSum = 0;
        cartProductData.forEach(({ product, quantity }) => {
            totalItems += quantity;
            sum += product.price * quantity;
            oldPriceSum += product.oldPrice * quantity;
        })
        setTotalItems(totalItems);
        setTotalAmount(Math.round(sum))
        setOldPriceSum(Math.round(oldPriceSum));
    }

    useEffect(() => {
        handleCartCalculation()
    }, [cartProductData])
    useEffect(() => {
        getCartProductData()
    }, [])
    return (
        <>
            <div id='navbar'>
                <div>
                    <Link to={'/'} onClick={() => getProductData()} style={{ textDecoration: 'none' }}>
                        <h1>R&W</h1>
                    </Link>
                </div>



                <div id='cart-icon'>
                    <Link to='/cart'>
                        <ShoppingCartOutlined style={{ fontSize: '35px' }} />
                    </Link>
                    <div>{cartProductData.length}</div>
                </div>

            </div>

           

            <div id='cart-main'>
                {cartProductData.length === 0 ?
                    <div id='empty-div'>
                        <Empty
                            imageStyle={{ height: 160 }}
                            description={
                                <h4>
                                    Oops! your Cart Is Empty
                                </h4>
                            }
                        >
                            <Link to={'/'}>
                                <Button type="primary">Add Items To Cart</Button>
                            </Link>
                        </Empty>
                    </div>
                    : <div id='cart-item-list' >
                        {cartProductData?.map(({ _id, product, quantity }) => <CartItems key={_id} {...{ ...product, cartId: _id, quantity }} />)}
                    </div>}
                <div id='price-details' className='bg'>
                    <div className='price-borders total-amount'>
                        <h3>
                            PRICE DETAILS
                        </h3>
                    </div>
                    <div className='price-borders'>
                        <div className='price-list-items-div'>
                            <h3>Price ({totalItems} items)</h3>
                            <h3>{totalAmount}</h3>
                        </div>
                        <div className='price-list-items-div'>
                            <h3>Discount</h3>
                            <h3>
                                <span>- ${Math.abs(oldPriceSum - totalAmount)}</span>
                            </h3>
                        </div>  <div className='price-list-items-div'>
                            <h3>Delivery Charges</h3>
                            <div style={{ textAlign: 'right' }}>
                                <h3>
                                    {cartProductData.length === 0 ? 0 : totalAmount >= 99 ? <><s>$25</s> <span>Free</span></> : '$25'}
                                </h3>
                                {totalAmount < 99 && <h6>
                                    <span style={{ fontSize: '10px' }}>Free Delivery over $99 cart value.</span>
                                </h6>
                                }
                            </div>


                        </div>
                    </div>
                    <div className='price-list-items-div total-amount'>
                        <h2>Total Amount</h2>
                        <h2>$ {cartProductData.length === 0 ? 0 : totalAmount < 99 ? totalAmount + 25 : totalAmount}</h2>
                    </div>
                    <div>
                        <span>You will save ${Math.abs(oldPriceSum - totalAmount)} on this order</span>
                    </div>
                    <div className='place-btn'>
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage;
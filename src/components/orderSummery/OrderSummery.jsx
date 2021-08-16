import React from 'react'
import './OrderSummery.scss';
import bookpic from '../../assests/images/bookpic.png';

export default function MyCart() {
    return (
        <div>
            <div className='other-div'>
                <div className='my-ordercart'>
                    <span>Order Summery</span>
                </div>
                <div className='cart-details'>
                    <div>
                        <img src={bookpic} alt='bookpic'/>
                    </div>
                  
                    <div className='book-details'>
                        <span className='book-title'>Don't Make Me Think</span>
                        <span className='author'>by Steve Krug</span>
                        <span className='price'> Rs.1500</span>
                    </div>
                </div>
                <div className='placeButton'>
                    <button className='placed-button'>checkout</button>
                </div>
            </div>
        </div>
    )
}

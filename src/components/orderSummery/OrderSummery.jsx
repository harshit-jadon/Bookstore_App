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
                {
                    JSON.parse(localStorage.getItem("cart")).map((book)=>(
                        <div className='cart-details'>
                            <div>
                                <img src={book.image} alt='bookpic' className="card-img"/>
                            </div>

                            <div className='book-details'>
                                <span className='book-title'>{book.title}</span>
                                <span className='author'>{book.author}</span>
                                <span className='price'>{book.price}</span>
                            </div>
                        </div>
                    ))
                }

                <div className='placeButton'>
                    <button className='placed-button'>checkout</button>
                </div>
            </div>
        </div>
    )
}

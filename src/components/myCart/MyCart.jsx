import React from 'react'
import './MyCart.scss';
import bookpic from '../../assests/images/bookpic.png';
import BookDetails from './BookDetails';

export default function MyCart() {
    return (
        <div className='main-div'>
            <div className='other-div'>
                <div className='my-cart'>
                    <span>My Cart(2)</span>
                </div>
                {
                    JSON.parse(localStorage.getItem("cart")).map((book)=>(
                        <>
                        <div className='cart-details'>
                            <div>
                                <img src={book.image} alt='bookpic'/>
                            </div>
                            <div className='details-div'>
                                <BookDetails book={book}/>
                            </div>
                        </div>
                    <div className='increase-decrease'>
                    <div className="value-button" id="decrease" value="Decrease Value">-</div>
                    <input type="text" id="number" value="1" className='incDecNumber'/>
                    <div className="value-button" id="increase" onClick="increaseValue()" value="Increase Value">+</div>
                    <button className='remove'>Remove</button>
                    </div>
                        </>
                    ))
                }

                <div className='placeButton'>
                    <button className='placed-button'>place order</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './OrderSummery.scss';
import {useHistory} from "react-router-dom";

export default function MyCart(props) {
    let history=useHistory()
    function navigate(path) {
        history.push(`${path}`)
    }
    return (
        <div>
            <div className='other-summerydiv'>
                <div className='my-summeryordercart'>
                    <span>Order Summery</span>
                </div>
                {props.isOpen &&<>
                {
                        JSON.parse(localStorage.getItem("cart")).map((book)=>(
                            <div className='cart-summerydetails'>
                                <div>
                                    <img src={book.image} alt='bookpic' className="card-summeryimg"/>
                                </div>

                                <div className='book-summerydetails'>
                                    <span className='book-summerytitle'>{book.title}</span>
                                    <span className='authorsummery'>{book.author}</span>
                                    <span className='pricesummery'>{book.price}</span>
                                </div>
                            </div>
                        ))
                    }


                <div className='placeSummeryButton'>
                    <button className='placed-summerybutton' onClick={()=>navigate('/orderplaced')}>checkout</button>
                </div>
                </>
                }
            </div>
        </div>
    )
}

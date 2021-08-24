import React, {useState} from 'react'
import './BookDetails.scss';

export default function BookDetails(props) {


    function remove() {
       let arr=JSON.parse(localStorage.getItem('cart')).findIndex((element)=>element.id===props.book.id)
        // localStorage.setItem('cart',JSON.stringify(arr))
        console.log(arr)
       let arr1=JSON.parse(localStorage.getItem('cart'))
        arr1.splice(arr,1)
        localStorage.setItem('cart',JSON.stringify(arr1))

    }

    return (
        <div>

            <div className='book-details'>
                        <span className='book-title'>{props.book.title}</span>
                        <span className='author'>{props.book.author}</span>
                        <span className='price'> {props.book.price}</span>
                        <div className='increase-decrease'>
                            {/* <div className="value-button" id="decrease" value="Decrease Value">-</div> */}
                            <input type="text" id="number" value="1" className='incDecNumber'/>
                            {/* <div className="value-button" id="increase" onClick="increaseValue()" value="Increase Value">+</div> */}
                            <button className='remove' onClick={(e)=> {
                                remove();
                                props.refresh(e);
                            }}>Remove</button>
                        </div>
                    </div>
        </div>
    )
}

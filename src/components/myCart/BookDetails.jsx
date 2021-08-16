import React from 'react'
import './BookDetails.scss';

export default function BookDetails(props) {
    return (
        <div>

            <div className='book-details'>
                        <span className='book-title'>{props.book.title}</span>
                        <span className='author'>{props.book.author}</span>
                        <span className='price'> {props.book.price}</span>
                        <div className='increase-decrease'>
                            <div className="value-button" id="decrease" value="Decrease Value">-</div>
                            <input type="text" id="number" value="1" className='incDecNumber'/>
                            <div className="value-button" id="increase" onClick="increaseValue()" value="Increase Value">+</div>
                            <button className='remove'>Remove</button>
                        </div>
                    </div>
        </div>
    )
}

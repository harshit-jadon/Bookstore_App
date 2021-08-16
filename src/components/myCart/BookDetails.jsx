import React from 'react'
import './BookDetails.scss';

export default function BookDetails(props) {
    return (
        <div>

            <div className='book-details'>
                        <span className='book-title'>{props.book.title}</span>
                        <span className='author'>{props.book.author}</span>
                        <span className='price'> {props.book.price}</span>
                    </div>
        </div>
    )
}

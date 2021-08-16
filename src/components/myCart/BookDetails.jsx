import React from 'react'
import './BookDetails.scss';

export default function BookDetails() {
    return (
        <div>   
            <div className='book-details'>
                        <span className='book-title'>Don't Make Me Think</span>
                        <span className='author'>by Steve Krug</span>
                        <span className='price'> Rs.1500</span>
                    </div>
        </div>
    )
}

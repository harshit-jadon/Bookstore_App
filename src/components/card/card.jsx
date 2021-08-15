import React from 'react';
import './card.scss';

function BookCard(props){
    function addToCart(book) {
        // var carts=[]
        // if(JSON.parse(localStorage.getItem('book'))!==null)
        //     carts.push(JSON.parse(localStorage.getItem('book')))
        // carts.push(book)
        // localStorage.setItem("books",JSON.stringify(carts))
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(cart){
            let books = cart.find(bookData => bookData.id===book.id);
            if(!books){
                cart.push(book);
            }
        }
        else{
            cart = [book];
        }
        localStorage.setItem("cart",JSON.stringify(cart));
    }

    return(
        <>
            { props.bookDetails.map((book)=>(
                <div className="book-cards">
                    <div className="book-card">
                        <img src={book.image} alt="" className="card-img"/>
                        <div className="book-info">
                            <h3 className="book-title">{book.title}</h3>
                            <span className="text">by {book.author}</span>
                            <h4 className="book-price">Rs. {book.price}</h4>
                            <div className="buttons">
                                <button className="button-cart" onClick={()=>addToCart(book)}>ADD TO CART</button>
                                <button className="button-wishlist">WISHLIST</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default BookCard;
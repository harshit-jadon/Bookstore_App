import React, {useState} from 'react';
import './card.scss';
import {Tooltip, withStyles} from "@material-ui/core";

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
    const [isShown, setIsShown] = useState(false);
    const [shownElement,setShownElement] = useState();
    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: 'rgb(255,255,255)',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);
    return(
        <>
            { props.bookDetails.map((book)=>(
                <div className="book-cards" >
                    <HtmlTooltip title={book.description} placement={"right-start"}>
                    <div className="book-card" onMouseEnter={() => {
                        setIsShown(true)
                        setShownElement(book.id)
                    }}
                         onMouseLeave={() => setIsShown(false)}>
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
                    </HtmlTooltip>

                </div>
            ))
            }
        </>
    )
}

export default BookCard;
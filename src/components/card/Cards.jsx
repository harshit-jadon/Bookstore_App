import React, {useEffect, useState} from 'react';
import './Cards.scss';
import {Tooltip, withStyles} from "@material-ui/core";

function BookCard(props){
    const useForceUpdate = () => {
        const [count, setCount] = useState(0)

        const increment = () => setCount(prevCount => prevCount + 1)
        return [increment, count]
    }
    const [forceUpdate] = useForceUpdate()
    const onClickHandler = e => {
            forceUpdate()
        }

    useEffect(()=>gg(),[])
    function gg() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(cart){
            let g=cart.map(book=>{
                return book.id
            })
            setShownElement(g);
            console.log(g)
        }

    }

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

        if(shownElement){
            if(!shownElement.find(id=> id===book.id))
            {
                let temp = shownElement
                temp.push(book.id)
                setShownElement(temp)
            }
        }
        else
            setShownElement([book.id])
        console.log(shownElement)
    }
    const [shownElement,setShownElement] = useState([]);
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
                        <div className="book-card">
                            <img src={book.image} alt="" className="card-img"/>
                            <div className="book-info">
                                <h3 className="book-title">{book.title}</h3>
                                <span className="text">by {book.author}</span>
                                <h4 className="book-price">Rs. {book.price}</h4>
                                {
                                    (shownElement.find(id=>id===book.id) === undefined || !(shownElement.find(id=>id===book.id) ===book.id))
                                &&<div className="buttons">
                                        {console.log(shownElement.some(id => id === book.id))
                                        }
                                        <button className="button-cart" onClick={()=> {
                                            addToCart(book)
                                            onClickHandler()
                                        }}>Add To Bag</button>
                                    <button className="button-wishlist">WISHLIST</button>
                                </div>
                                }
                                {
                                    shownElement.some(id=>id===book.id)
                                        &&

                                    <div className="buttons">
                                        {console.log(shownElement.some(id => id === book.id))
                                        }
                                        <button className="button-cart1">Added To Bag</button>
                                    </div>
                                }
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
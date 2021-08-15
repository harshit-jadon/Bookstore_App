import React from 'react';
import '../header/header.scss';
import bookStoreLogo from '../../assests/images/education.svg';
import cartLogo from '../../assests/images/supermarket.svg';
import searchLogo from '../../assests/images/ic_zoom_out_24px.svg';

export default function Header() {
    const cartSize=()=>{
        const cart=JSON.parse(localStorage.getItem("cart"))
        if(cart) {
            console.log(cart.length)
            return cart.length
        }
    }
    return (
        <div>
           <header class='header-content'>
                <div class = 'logo-bookstore'>
                    <img src={bookStoreLogo} alt ='bookStorelogo'/>
                    <span>Bookstore</span>
                </div>
                <div className='anchor'>
                    <img className='search-logo' src={searchLogo} alt ='searchlogo'/>
                    <input type='search' placeholder='Search...' className='search-bar'/>
                </div>
                <div class='cart-logo'>
                    <span>Cart</span>
                    <img src={cartLogo} alt='cartLogo'/>{cartSize()}
                </div>
           </header>
        </div>
    )
}
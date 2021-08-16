import React from 'react';
import '../header/header.scss';
import bookStoreLogo from '../../assests/images/education.svg';
import cartLogo from '../../assests/images/supermarket.svg';
import searchLogo from '../../assests/images/ic_zoom_out_24px.svg';

export default function Header() {
<<<<<<< HEAD

=======
>>>>>>> 5dc5bfd5af265a2e773fb2eebedd6ab83be49bd9
    const cartSize=()=>{
        const cart=JSON.parse(localStorage.getItem("cart"))
        if(cart) {
            console.log(cart.length)
            return cart.length
        }
    }
<<<<<<< HEAD

=======
>>>>>>> 5dc5bfd5af265a2e773fb2eebedd6ab83be49bd9
    return (
        <div className='sidebar'>
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
<<<<<<< HEAD
                    <img src={cartLogo} alt='cartLogo'/><span className="cart-count">{cartSize()}</span>
=======
                    <img src={cartLogo} alt='cartLogo'/>{cartSize()}
>>>>>>> 5dc5bfd5af265a2e773fb2eebedd6ab83be49bd9
                </div>
           </header>
        </div>
    )
}
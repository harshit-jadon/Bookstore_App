import React from 'react';
import '../header/header.scss';
import bookStoreLogo from '../../assests/images/education.svg';
import cartLogo from '../../assests/images/supermarket.svg';
import searchLogo from '../../assests/images/ic_zoom_out_24px.svg';
import {Link} from "@material-ui/core";
import {useHistory} from "react-router-dom"

export default function Header(props) {
    const cartSize=()=>{
        const cart=JSON.parse(localStorage.getItem("cart"))
        if(cart) {
            console.log(cart.length)
            return cart.length
        }
    }

    let history=useHistory()
    function navigate(path) {
        history.push(`${path}`)
    }

    return (
        <div className='sidebar'>
           <header class='header-content'>
                <div class = 'logo-bookstore' onClick={()=>navigate("/homepage")} style={{cursor:'pointer'}}>
                    <img src={bookStoreLogo} alt ='bookStorelogo'/>
                    <span>Bookstore</span>
                </div>
                <div className='anchor'>
                    <img className='search-logo' src={searchLogo} alt ='searchlogo'/>
                    <input type='search' placeholder='Search...' className='search-bar'/>
                </div>
                <div className='cart-logo'onClick={()=>navigate("/page3")}>
                    <span>Cart</span>
                    <img src={cartLogo} alt='cartLogo' />
                    {
                        cartSize()>0 &&  <span className="cart-count">{cartSize()}</span>
                    }
                </div>
           </header>
        </div>
    )
}
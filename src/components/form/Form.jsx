import React from 'react';
import './Form.scss';
import '../newUser/NewUser';

export default function Form() {
    return (
           <form className='form-lp-div-2'>
             <div className='form-lp-title'>
                <span className='title'>Login to Bookcart</span>
             </div>
             <div className='details-lp-div'>
                <label>Username</label>
                <input className='input-lp' type="text" placeholder='Email Adrress / PhoneNumber'/> 
              </div>
              <div className='details-lp-div'>
                <label>Password</label>
                <input className='input-lp password-lp' type='password' placeholder='Password'/>
              </div>
              <div className='details-lp-div2'>
                <input type='radio'/><span>Remember me</span>
              </div>
              <div className='details-lp-div2'><a href=''><span>Forgot Password</span></a></div>
              <div className='button-lp-div'>
                <button className='login-lp-button'>Login</button>
                <span className='or-lp'> or </span>
                <button className='login-lp-button facebook-lp'>New to Bookstore? Create an account</button>
              </div>
           </form>
    )
}

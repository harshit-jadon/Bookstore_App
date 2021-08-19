import React from 'react'
import './LoginPage.scss';
import bookbg from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore App/bookstore-app/src/assests/images/bookbg.jpg';



export default function LoginPage() {
    return (
      <div className='body-lp-div'>
        <div className='main-lp-div'>
          <div className='img-bor-div'>
            <img className='img-lp'src={bookbg}/>
          </div>
         <div className='form-lp-div'>
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
                <input className='password-lp' type='password' placeholder='Password'/>
              </div>
              <div className='details-lp-div2'>
                <input type='radio'/><span>Remember me</span>
              </div>
              <div className='details-lp-div2'><a href=''><span>Forgot Password</span></a></div>
              <div className='button-lp-div'>
                <button className='login-lp-button'>Login</button>
                <span className='or-lp'> or </span>
                <button className='login-lp-button facebook-lp'>Login with Facebook</button>
                <button className='login-lp-button google-lp'>Login with Google Account</button>
              </div>
           </form>
         </div>
        </div>
      </div>
    )
}

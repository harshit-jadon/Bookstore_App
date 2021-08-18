import React from 'react'
import './LoginPage.scss';
import bookbg from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore App/bookstore-app/src/assests/images/bookbg.jpg';



export default function LoginPage() {
    return (
      <div className='body-div'>
        <div className='main-div'>
          <div className='img-bor-div'>
            <img src={bookbg}/>
          </div>
         <div className='form-div'>
           <form className='form-div-2'>
             <div className='form-title'>
                <span className='title'>Login to Bookcart</span>
             </div>
             <div className='details-div'>
                <label>Username</label>
                <input type="text" placeholder='Email Adrress / PhoneNumber'/> 
              </div>
              <div className='details-div'>
                <label>Password</label>
                <input className='password' type='password' placeholder='Password'/>
              </div>
              <div className='details-div2'>
                <input type='radio'/><span>Remember me</span>
              </div>
              <div className='details-div2'><a href=''><span>Forgot Password</span></a></div>
              <div className='button-div'>
                <button className='login-button'>Login</button>
                <span className='or'> or </span>
                <button className='login-button facebook'>Login with Facebook</button>
                <button className='login-button google'>Login with Google Account</button>
              </div>
           </form>
         </div>
        </div>
      </div>
    )
}

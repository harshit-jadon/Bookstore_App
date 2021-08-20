import React from 'react';
import './NewUser.scss';

export default function NewUser() {
    return (
        <div className="newuser-div">
            <form className='newuser-div-2'>
             <div className='user-form-title'>
                <span className='title'>Welcome to BookCart New User</span>
             </div>
             <div className='user-details-div'>
                <label> FullName</label>
                <input className='input-lp' type="text" placeholder='full name'/> 
              </div>
             <div className='user-details-div'>
                <label>E-mail</label>
                <input className='input-lp' type="text" placeholder='Email Adrress'/> 
              </div>
              <div className='user-details-div'>
                <label>Password</label>
                <input className='input-lp' type='password' placeholder='Password'/>
              </div>
              <div className='user-details-div'>
                <label> Phone Number</label>
                <input className='input-lp' type="tele" placeholder='phone Number'/> 
              </div>
              <div className='user-button-div'>
                <button className='login-lp-button'>Sign Up</button>
                <span className='or-lp'> or </span>
                <button className='login-lp-button facebook-lp'>Existing User! Login in</button>
              </div>
           </form>
        </div>
    )
}
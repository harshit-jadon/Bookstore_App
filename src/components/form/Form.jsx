import React, {useState} from 'react';
import './Form.scss';
import '../newUser/NewUser';
import {useHistory} from "react-router-dom";
import BookStoreService from "../../service/BookStoreService";

export default function Form() {

    let history=useHistory()
    function navigate(path) {
        history.push(`${path}`)
    }

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    function emailChange(e) {
        setEmail(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)    }

    function login(e) {
        e.preventDefault()
        const object={
            username:email,
            password:password
        }
        new BookStoreService().login(object).then(responseText => {
            console.log("login successfully" + JSON.stringify(responseText.data.token))
            localStorage.setItem('token',responseText.data.token)

        }).then(()=>navigate('/homepage'))

            .catch(err=>{console.log(err);}
            )
    }

    return (
           <form className='form-lp-div-2'>
             <div className='form-lp-title'>
                <span className='title'>Login to Bookcart</span>
             </div>
             <div className='details-lp-div'>
                <label>Username</label>
                <input className='input-lp' type="text" placeholder='Email Adrress / PhoneNumber'
                value={email} onChange={(e)=>emailChange(e)}/>
              </div>
              <div className='details-lp-div'>
                <label>Password</label>
                <input className='input-lp password-lp' type='password' placeholder='Password'
                value={password} onChange={(e)=>passwordChange(e)}/>
              </div>
              <div className='details-lp-div2'>
                <input type='radio'/><span>Remember me</span>
              </div>
              <div className='details-lp-div2'><a href=''><span>Forgot Password</span></a></div>
              <div className='button-lp-div'>
                <button className='login-lp-button' onClick={(e)=>login(e)}>Login</button>
                <span className='or-lp'> or </span>
                <button className='login-lp-button facebook-lp' onClick={()=>navigate('/newuser')}>Create a new account</button>
              </div>
           </form>
    )
}

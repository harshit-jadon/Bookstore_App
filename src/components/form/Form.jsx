import React, {useState} from 'react';
import './Form.scss';
import '../newUser/NewUser';
import {useHistory} from "react-router-dom";
import BookStoreService from "../../service/BookStoreService";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@material-ui/core";

export default function Form() {

    let history=useHistory()
    function navigate(path) {
        history.push(`${path}`)
    }

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [emailError,setemailError]=useState('');
    const [passwordError,setpasswordError]=useState('');
    const [isError,setisError]=useState(false);

    function emailChange(e) {
        setEmail(e.target.value)
          const nameRegex = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
          if(nameRegex.test(e.target.value)){
            setemailError('')
            setisError(false)
          }else{
            setemailError('Something is Wrong..if you are NEW USER Click on "Create a New Account"')
            setisError(true) } 
        }

    function passwordChange(e) {
        setPassword(e.target.value)
        const nameRegex = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
        if(nameRegex.test(e.target.value)){
          setpasswordError('')
          setisError(false)
        }else{
          setpasswordError('Incorrect Password')
          setisError(true) }  
    }

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

            .catch(err=>{
                handleClickOpen()
                console.log(err);}
            )

    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
           <form className='form-lp-div-2'>
               <Dialog
                   open={open}
                   onClose={handleClose}
                   aria-labelledby="alert-dialog-title"
                   aria-describedby="alert-dialog-description"
               >
                   <DialogContent>
                       <DialogContentText id="alert-dialog-description">
                           Incorrect Username or Password
                       </DialogContentText>
                   </DialogContent>
                   <DialogActions>
                       <Button onClick={()=> {
                           handleClose()
                       }} color="primary">
                           close
                       </Button>
                   </DialogActions>
               </Dialog>

               <div className='form-lp-title'>
                <span className='title'>Login</span>
             </div>
             <div className='details-lp-div'>
                <label>Username</label>
                <input className='input-lp' type="text" placeholder='Email Adrress'
                value={email} onChange={(e)=>emailChange(e)}/>
                <error-output className="text-error" htmlFor="email">{emailError}</error-output>
              </div>
              <div className='details-lp-div'>
                <label>Password</label>
                <input className='input-lp password-lp' type='password' placeholder='Password'
                value={password} onChange={(e)=>passwordChange(e)}/>
                <error-output2 className="text-error" htmlFor="email">{passwordError}</error-output2>
              </div>
              {/* <div className='details-lp-div2'>
                <input type='radio'/><span>Remember me</span>
              </div>
              <div className='details-lp-div2'><a href=''><span>Forgot Password</span></a></div> */}
              <div className='button-lp-div'>
                <button className='login-lp-button' onClick={(e)=>login(e)}>Login</button>
                <span className='or-lp'> or </span>
                <button className='login-lp-button facebook-lp' onClick={()=>navigate('/signup')}>Create a new account</button>
              </div>
           </form>
    )
}

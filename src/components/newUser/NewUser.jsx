import React, {useState} from 'react';
import './NewUser.scss';
import {useHistory} from "react-router-dom";
import BookStoreService from "../../service/BookStoreService";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@material-ui/core";
export default function NewUser() {
    let history=useHistory()
    function navigate(path) {
        history.push(`${path}`)

    }


    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword] = useState('')
    const [mobileNumber,setMobileNumber]=useState('')

    const [nameError,setnameError]=useState('');
    const [emailError,setemailError]=useState('');
    const [passwordError,setpasswordError]=useState('');
    const [mobileNumberError,setmobileNumberError]=useState('');
    const [isError,setisError]=useState(false);

    function submit(e){
        e.preventDefault()
        let submitObject={
            username:email,
            password:password,
            mobile:mobileNumber,
            name:name
        }
        new BookStoreService().addNewUser(submitObject).then(responseText => {
            handleClickOpen()
            console.log("user added successfully" + JSON.stringify(responseText.data))})
            .catch(err=>{console.log(err);}
        )
    }

    const nameChange = (e) => {
        setName(e.target.value)
        const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
          if(nameRegex.test(e.target.value)){
            setnameError('')
            setisError(false)
          }else{
            setnameError('Invalid Name')
            setisError(true) } 
      }
      const emailChange = (e) => {
        setEmail(e.target.value)
        const nameRegex = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        if(nameRegex.test(e.target.value)){
          setemailError('')
          setisError(false)
        }else{
          setemailError('Invalid Email')
          setisError(true) } 
      }
    
    const passwordChange=(e)=>{
        setPassword(e.target.value)
        const nameRegex = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
        if(nameRegex.test(e.target.value)){
          setpasswordError('')
          setisError(false)
        }else{
          setpasswordError('Invalid Password')
          setisError(true) } 
    }
    const mobileChange = (e) => {
      setMobileNumber(e.target.value)
      const nameRegex = RegExp('^[0-9]{1}[0-9\\s]{2,9}$');
      if(nameRegex.test(e.target.value)){
        setmobileNumberError('')
        setisError(false)
      }else{
        setmobileNumberError('Invalid Mobile Number (not greater than 10 digits)')
        setisError(true) } 
  }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="newuser-div">

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            User Added Successfully
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {
                            handleClose()
                            navigate('/login')
                        }} color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>

          <form className='newuser-div-2'>
             <div className='user-form-title'>
                <span className='title'>Signup</span>
             </div>
             <div className='user-details-div'>
                <label htmlFor="name"> FullName</label>
                <input className='input-lp' type="text" placeholder='full name' value={name} onChange={(e)=>nameChange(e)} required/>
                <small className='small-div'>Format: Prince</small>
                <error-output className="text-error" htmlFor="name">{nameError}</error-output>
              </div>
             <div className='user-details-div'>
                <label htmlFor="email">E-mail</label>
                <input className='input-lp' type="text" placeholder='Email Adrress' value={email} onChange={(e)=>emailChange(e)} required/>
                <small className='small-div'>Format: prince@gmail.com or any valid e-mail format</small>
                <error-output className="text-error" htmlFor="email">{emailError}</error-output>
              </div>
              <div className='user-details-div'>
                <label htmlFor="password">Password</label>
                <input className='input-lp' type='password' placeholder='Password' value={password} onChange={(e)=>passwordChange(e)} required/>
                <small className='small-div'>Format: Prince@01</small>
                <error-output className="text-error" htmlFor="password">{passwordError}</error-output>
              </div>
              <div className='user-details-div'>
                <label htmlFor="phoneNumber"> Phone Number</label>
                <input className='input-lp' type="tel" placeholder='phone Number' value={mobileNumber} onChange={(e)=>mobileChange(e)} required/>
                <small className='small-div'>Format: 987 756 1234</small>
                <error-output className="text-error" htmlFor="phoneNumber">{mobileNumberError}</error-output>
              </div>
              <div className='user-button-div'>
                <button className='login-lp-button' onClick={(e)=>submit(e)}>Sign Up</button>
                <span className='or-lp'> or </span>
                <button className='login-lp-button facebook-lp' onClick={()=>navigate('/login')}>Existing User! Login in</button>
              </div>
           </form>
        </div>
    )
}
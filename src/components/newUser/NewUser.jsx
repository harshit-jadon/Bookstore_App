import React, {useState} from 'react';
import './NewUser.scss';
import {useHistory} from "react-router-dom";
import BookStoreService from "../../service/BookStoreService";
export default function NewUser() {
    let history=useHistory()
    function navigate(path) {
        history.push(`${path}`)

    }


    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword] = useState('')
    const [mobileNumber,setMobileNumber]=useState('')
    function submit(e){
        e.preventDefault()
        let submitObject={
            username:email,
            password:password,
            mobile:mobileNumber,
            name:name
        }
        new BookStoreService().addNewUser(submitObject).then(responseText => {
            console.log("user added successfully" + JSON.stringify(responseText.data))})
            .catch(err=>{console.log(err);}
        )
    }

    const nameChange = (e) => {
        setName(e.target.value)
        // const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        // if(nameRegex.test(e.target.value)){
        //     this.setState({nameError: ''})
        //     this.setState({isError:false})
        //     setName(e.target.value)
        // }else{
        //     this.setState({nameError:'Invalid Name'});
        //     this.setState({isError:true})
        // }
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const mobileChange = (e) => {
      setMobileNumber(e.target.value)
    }
    const emailChange = (e) => {
      setEmail(e.target.value)
    }
    return (
        <div className="newuser-div">
            <form className='newuser-div-2'>
             <div className='user-form-title'>
                <span className='title'>Welcome to BookCart New User</span>
             </div>
             <div className='user-details-div'>
                <label> FullName</label>
                <input className='input-lp' type="text" placeholder='full name' value={name}
                       onChange={(e)=>nameChange(e)}/>
              </div>
             <div className='user-details-div'>
                <label>E-mail</label>
                <input className='input-lp' type="text" placeholder='Email Adrress' value={email}
                onChange={(e)=>emailChange(e)}/>
              </div>
              <div className='user-details-div'>
                <label>Password</label>
                <input className='input-lp' type='password' placeholder='Password' value={password}
                onChange={(e)=>passwordChange(e)}/>
              </div>
              <div className='user-details-div'>
                <label> Phone Number</label>
                <input className='input-lp' type="tele" placeholder='phone Number' value={mobileNumber}
                onChange={(e)=>mobileChange(e)}/>
              </div>
              <div className='user-button-div'>
                <button className='login-lp-button' onClick={(e)=>submit(e)}>Sign Up</button>
                <span className='or-lp'> or </span>
                <button className='login-lp-button facebook-lp' onClick={()=>navigate('/loginpage')}>Existing User! Login in</button>
              </div>
           </form>
        </div>
    )
}
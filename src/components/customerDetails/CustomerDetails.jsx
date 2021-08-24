import React, {useEffect, useState} from 'react'
import './CustomerDetails.scss';
import TextField from '@material-ui/core/TextField';
import BookStoreService from "../../service/BookStoreService";

export default function CustomerDetails(props) {
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const [pincode,setPinCode]=useState('');
    const [locality,setLocality]=useState('');
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [landmark,setLandmark]=useState('');

    const [pincodeError,setpincodeError]=useState('');
    const [isError,setisError]=useState(false);

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleMobile=(e)=>{
        setMobile(e.target.value)
    }
    const handlePinCode=(e)=>{
        setPinCode(e.target.value)
        const nameRegex = RegExp('^[0-9]{1}[0-9\\s]{5,5}$');
        if(nameRegex.test(e.target.value)){
            setpincodeError('')
          setisError(false)
        }else{
            setpincodeError('pincode is not available')
          setisError(true) } 
    }
    const handleLocality=(e)=>{
        setLocality(e.target.value)
    }
    const handleAddress=(e)=>{
        setAddress(e.target.value)
    }
    const handleCity=(e)=>{
        setCity(e.target.value)
    }
    const handleLandmark=(e)=>{
        setLandmark(e.target.value)
    }
    const submitAddress = () => {
      let object={
          "city":city,
          "landmark":landmark,
          "pincode":pincode,
          "locality":locality,
          "address":address
      }
      new BookStoreService().patchAddress(object).then(responseText => {
            console.log("Address Added successfully" + JSON.stringify(responseText.data))})
            .catch(err=>{console.log(err);}
            )
    }

    return (
        <div className='other-details-cd'>
            <div className='details-ordercart-cd'>
                <span>Customer Details</span>
            </div>
            {props.isOpen &&
            <>
                <div className='input-div'>
                <div>
                        <TextField  style={{ margin: 8, width: 250 }} label="Name" id="outlined-size-normal" variant="outlined" value={props.user.name} required/>
                        <TextField  style={{ margin: 8 , width: 250}} label="Phone number" id="outlined-size-normal" variant="outlined" value={props.user.mobile} required/>
                    </div>
                    <div>
                        <TextField  htmlFor="pincode" style={{ margin: 8 , width: 250}} label="Pincode" id="outlined-size-normal" variant="outlined"
                                    value={pincode} onChange={(e)=>handlePinCode(e)}/>
                             <error-output className="text-error" htmlFor="pincode">{pincodeError}</error-output>
                            
                        <TextField  style={{ margin: 8, width: 250 }} label="Locality" id="outlined-size-normal" variant="outlined"
                                    value={locality} onChange={(e)=>handleLocality(e)}/>
                    </div>
                    <div>
                        <TextField style={{ margin: 8 , width: 517}}   label="Address" id="standard-multiline-static" multiline rows={4} variant="outlined"
                                   value={address} onChange={(e)=>handleAddress(e)}/>
                    </div>
                    <div>
                        <TextField  style={{ margin: 8 , width: 250}} label="city/town" id="outlined-size-normal" variant="outlined"
                                    value={city} onChange={(e)=>handleCity(e)}/>
                        <TextField  style={{ margin: 8 , width: 250}} label="Landmark" id="outlined-size-normal" variant="outlined"
                                    value={landmark} onChange={(e)=>handleLandmark(e)}/>
                    </div>
                </div>
                <div className='radioDiv'>
                    <div>
                        <span className='type'>Type</span>
                    </div>
                    <div className='radio' required>
                        <div>
                            <input type="radio" checked="checked" name="radio"/>
                            <label>Home</label>
                        </div>
                        <div>
                            <input type="radio" checked="checked" name="radio"/>
                            <label>Work</label>
                        </div>
                        <div>
                            <input type="radio" checked="checked" name="radio"/>
                            <label>Others</label>
                        </div>
                    </div>
                </div>

                <div className='placeButton-cd'>
                <button className='placed-button-cd' onClick={()=> {
                    props.openSummary(true)
                    submitAddress();
                }}>continue</button>
                </div>
            </>
            }
        </div>
    )
}
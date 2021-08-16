import React from 'react'
import './CustomerDetails.scss';
import TextField from '@material-ui/core/TextField';

export default function customerDetails() {
    return (
        <div className='other-details-cd'>
            <div className='details-ordercart-cd'>
                <span>Customer Details</span>
            </div>
            <div className='input-div'>
                <div>
                    <TextField label="Name" id="outlined-size-normal" variant="outlined"/>
                    <TextField label="Phone number" id="outlined-size-normal" variant="outlined"/>              
                </div>
                <div>
                    <TextField label="Pincode" id="outlined-size-normal" variant="outlined" />
                    <TextField label="Locality" id="outlined-size-normal" variant="outlined"/>
                </div>
                <div>
                    <TextField label="Address" id="outlined-size-normal" variant="outlined"/>
                </div>
                <div>
                    <TextField label="city/town" id="outlined-size-normal" variant="outlined" />
                    <TextField label="Landmark" id="outlined-size-normal" variant="outlined" />
                </div>
                </div>    
            <div className='radioDiv'>
                <div>
                    <span className='type'>Type</span> 
                </div>
                <div className='radio'>
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
                <button className='placed-button-cd'>place order</button>
            </div>  
        </div>
    )
}

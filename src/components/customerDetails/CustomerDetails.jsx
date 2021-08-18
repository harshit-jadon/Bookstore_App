import React from 'react'
import './CustomerDetails.scss';
import TextField from '@material-ui/core/TextField';

export default function customerDetails(props) {
    return (
        <div className='other-details-cd'>
            <div className='details-ordercart-cd'>
                <span>Customer Details</span>
            </div>
            {props.isOpen &&
            <>
                <div className='input-div'>
                <div>
                        <TextField  style={{ margin: 8, width: 250 }} label="Name" id="outlined-size-normal" variant="outlined"/>
                        <TextField  style={{ margin: 8 , width: 250}} label="Phone number" id="outlined-size-normal" variant="outlined"/>
                    </div>
                    <div>
                        <TextField  style={{ margin: 8 , width: 250}} label="Pincode" id="outlined-size-normal" variant="outlined"/>
                        <TextField  style={{ margin: 8, width: 250 }} label="Locality" id="outlined-size-normal" variant="outlined"/>
                    </div>
                    <div>
                        <TextField style={{ margin: 8 , width: 517}}   label="Address" id="standard-multiline-static" multiline rows={4} variant="outlined"/>
                    </div>
                    <div>
                        <TextField  style={{ margin: 8 , width: 250}} label="city/town" id="outlined-size-normal" variant="outlined"/>
                        <TextField  style={{ margin: 8 , width: 250}} label="Landmark" id="outlined-size-normal" variant="outlined"/>
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
                <button className='placed-button-cd' onClick={()=>props.openSummary(true)}>continue</button>
                </div>
            </>
            }
        </div>
    )
}

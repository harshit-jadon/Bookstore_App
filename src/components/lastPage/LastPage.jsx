import React from 'react';
import './LastPage.scss';
import Successfully from '../../assests/images/Group 4132.svg';
import {useHistory} from "react-router-dom";


export default function LastPage() {
    let history=useHistory()
    function navigate(path) {
        history.push(`${path}`)
        //hello
    }
    return (
        <div className='body-content'>
            <div className='successfully-content'>
                <img src={Successfully} alt='successfully logo' className='successfully-logo'/>
                <div className='message-div'>
                    <span className='message'>Order Placed Successfully</span>
                </div>
                 
            </div>
            <div className='confirm-message'>
                <p className='confirm-message-p'>hurray!!! your order is confirmed. we will deliver your order within 2-3 days...THANK YOU...</p>
            </div>
           <table className='table-content'>
                <tr className='table-head'>
                    <th>Email us</th>
                    <th>Contact us</th>
                    <th>Address</th>
                </tr>
                <tr className='table-row'>
                    <td>admin@bookstore.com</td>
                    <td>+91 8163475881</td>
                    <td class='td-address'>New Delhi</td>
                </tr>
            </table>      
            <div className='placeLPButton'>
                <button className='placed-LPbutton' onClick={()=>navigate('/homepage')}>Continue Shopping</button>
            </div>
    
        </div>
    )
}
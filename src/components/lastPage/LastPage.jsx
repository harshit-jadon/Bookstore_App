import React from 'react';
import '../lastPage/LastPage.scss';
import Successfully from '../../assests/images/Group 4132.svg';


export default function LastPage() {
    return (
        <div className='body-content'>
            <div className='successfully-content'>
                <img src={Successfully} alt='successfully logo' className='successfully-logo'/>
                <div className='message-div'>
                    <span className='message'>Order Placed Successfully</span>
                </div>
                 
            </div>
            <div className='confirm-message'>
                <p className='confirm-message-p'>hurray!!! your order is confirmed the order is #123456 save the order id for further communication.</p>
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
                <button className='placed-LPbutton'>Continue Shopping</button>
            </div>
    
        </div>
    )
}
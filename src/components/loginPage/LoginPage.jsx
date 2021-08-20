import React from 'react'
import './LoginPage.scss';
import bookbg from '../../assests/images/bookbg.jpg';
import Form from '../form/Form';


class LoginPage extends React.Component{
    render(){
        return(
          <div className='body-lp-div'>
            <div className='main-lp-div'>
              <div className='img-bor-div'>
                <img className='img-lp'src={bookbg}/>
              </div>
              <div className='form-lp-div'>
                <Form />
              </div>
            </div>
          </div>
        )
    }
}
export default LoginPage;
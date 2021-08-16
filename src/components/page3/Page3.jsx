import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer'; 
import MyCart from '../myCart/MyCart';
import OrderDetails from '../customerDetails/CustomerDetails';
import OrderSummery from '../orderSummery/OrderSummery';

class Page3 extends React.Component{

    render(){
        return(
            <>
            <Header />
            <MyCart />
            <OrderDetails />
            <OrderSummery />
            <Footer />
            </>
        );
    }
}
export default Page3;
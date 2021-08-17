import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer'; 
import MyCart from '../myCart/MyCart';
import OrderDetails from '../customerDetails/CustomerDetails';
import OrderSummery from '../orderSummery/OrderSummery';

class Page3 extends React.Component{
    constructor() {
        super();
        this.state={
            openAddress:false,
            openSummary:false
        }
    }
    render(){
        return(
            <>
            <Header />
            <MyCart openAddress={(value)=>this.setOpenAddress(value)}/>
            <OrderDetails isOpen={this.state.openAddress} openSummary={(value)=>this.setOpenSummery(value)}/>

            <OrderSummery isOpen={this.state.openSummary}/>
            <Footer />
            </>
        );
    }

    setOpenAddress(value) {
        this.setState({openAddress:value})
    }

    setOpenSummery(value) {
        this.setState({openSummary:value})

    }
}
export default Page3;
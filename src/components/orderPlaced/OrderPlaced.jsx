import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import LastPage from '../lastPage/LastPage'

class OrderPlaced extends React.Component{

    render(){
        return(
            <>
            <Header />
            <LastPage />
            <Footer />
            </>
        )
    }
}
export default OrderPlaced;

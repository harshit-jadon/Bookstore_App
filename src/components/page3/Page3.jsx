import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer'; 
import MyCart from '../myCart/MyCart';
import OrderDetails from '../customerDetails/CustomerDetails';
import OrderSummery from '../orderSummery/OrderSummery';
import BookStoreService from '../../service/BookStoreService';

class Page3 extends React.Component{
    constructor() {
        super();
        this.state={
            openAddress:false,
            openSummary:false,
            userData:'',
            refresh1:false
        }
        this.bookStoreService = new BookStoreService();
    }
    refresh(){
        this.setState({refresh1:true})
        console.log("hii")
    }
    stopPage(){
        this.setState({refresh1:false})
    }
    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.bookStoreService.getUser()
            .then(responseDTO => {

                let responseData = responseDTO;
                console.log("Data received after GET Call :\n" + responseData.data.name);
                this.setState({ userData: responseData.data });
            }).then(()=>{
                return this.state.userData
        }).catch(errror => {
            console.log("Error while fetching user\nError : " + JSON.stringify(errror));
        })
    }
    render(){
        return(
            <>
                <Header refresh={this.state.refresh1} stopRefresh={()=>this.stopPage()} username={this.state.userData.name}/>
                <MyCart openAddress={(value)=>this.setOpenAddress(value)} refresh_1={()=>this.refresh()}/>
            <OrderDetails isOpen={this.state.openAddress} openSummary={(value)=>this.setOpenSummery(value)}
                user={this.state.userData}/>

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
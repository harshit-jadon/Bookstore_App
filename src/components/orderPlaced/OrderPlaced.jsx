import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import LastPage from '../lastPage/LastPage'
import BookStoreService from '../../service/BookStoreService';
class OrderPlaced extends React.Component{
    constructor() {
        super();
        this.state={
            userData:''
        }
        this.bookStoreService = new BookStoreService();
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
            <Header username={this.state.userData.name}/>
            <LastPage />
            <Footer />
            </>
        )
    }
}
export default OrderPlaced;

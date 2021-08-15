import React from 'react';
import '../home-page/home-page.scss';
import Card from '../card/card.jsx';
import Header from '../header/header';
import Foot from '../footer/footer';
import BookStoreService from '../../service/BookStoreService';
class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            bookData : []
        };
        this.bookStoreService = new BookStoreService();
    }
    getBooks=()=>{
        this.bookStoreService.getAllBooks()
            .then(responseDTO => {
                let responseData = responseDTO;
                console.log("Data received after GET Call :\n" + responseData.data);
                this.setState({bookData: responseData.data},()=>console.log(this.state.bookData));
            }).catch(errror => {
            console.log("Error while fetching Employee List\nError : " + JSON.stringify(errror));
        })
    }
    componentDidMount() {
        this.getBooks()
        console.log(this.state.bookData)
    }



    render() {
        return(
            <>
            <Header/>
            <div className="book-details">
                <h3 className="heading">Books <span>{this.state.bookData.length}</span></h3>
                <div style={{  display: "grid",gridTemplateColumns: "auto auto auto auto",justifyContent: "space-evenly",gridRowGap:30}}>
                     <Card bookDetails={this.state.bookData} />
                </div>
            </div>
            <Foot/>
            </>
        )
    }
}

export default HomePage;
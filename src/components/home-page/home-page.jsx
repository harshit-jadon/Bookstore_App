import React from 'react';
import '../home-page/home-page.scss';
import Card from '../card/card.jsx';
import Header from '../header/header';
import Foot from '../footer/footer';
import BookStoreService from '../../service/BookStoreService';
import Pagination from '@material-ui/lab/Pagination';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            bookData : [],
            loading:true
        };
        this.bookStoreService = new BookStoreService();
    }
    getBooks=()=>{
        this.bookStoreService.getAllBooks()
            .then(responseDTO => {

                let responseData = responseDTO;
                console.log("Data received after GET Call :\n" + responseData.data);
                this.setState({bookData: responseData.data},()=>this.setState({loading:false}));
            }).catch(errror => {
            console.log("Error while fetching Employee List\nError : " + JSON.stringify(errror));
        }).finally(()=>{
            this.setState({loading:true})
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
                    <h3 className="heading">Books<span className="book-count">({this.state.bookData.length} Items)</span></h3>
                    <div className="cards-layout">
                        {
                            !this.state.loading && (
                            <Card bookDetails={this.state.bookData} />)
                        }

                    </div>
                </div>
                <Pagination count={10} />
                <Foot/>
            </>
        )
    }
}

export default HomePage;
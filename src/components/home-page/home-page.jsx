import React from 'react';
import '../home-page/home-page.scss';
import Card from '../card/Cards.jsx';
import Header from '../header/header';
import Foot from '../footer/footer';
import BookStoreService from '../../service/BookStoreService';
import Pagination from '@material-ui/lab/Pagination';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: []
        };
        this.bookStoreService = new BookStoreService();
    }
    getBooks = () => {
        this.bookStoreService.getAllBooks()
            .then(responseDTO => {

                let responseData = responseDTO;
                console.log("Data received after GET Call :\n" + responseData.data);
                this.setState({ bookData: responseData.data },()=>console.log(this.state.bookData));
            }).catch(errror => {
                console.log("Error while fetching Book List\nError : " + JSON.stringify(errror));
            })
    }

    componentDidMount() {
        this.getBooks()
        console.log(this.state.bookData)
    }



    render() {
        return (
            <>
                <Header />
                <div className="books-sort">
                    <h3 className="heading">Books<span className="book-count">({this.state.bookData.length} Items)</span></h3>
                    <select className="sort-box">
                        <option selected value="dafault">Sort by relevence</option>
                        <option value="Price:Low to High">Price:Low to High</option>
                        <option value="Price:High to Low">Price:High to Low</option>
                        <option value="Newest Arrival">Newest Arrival</option>
                    </select>
                </div>
                <div className="cards-layout">
                    <Card bookDetails={this.state.bookData}  />
                </div>
                <Pagination count={10} />
                <Foot />
            </>
        )
    }
}

export default HomePage;
import React, {useState} from 'react';
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
            bookData: [],
            refresh1:false,
            userData:''
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
        this.getUser()
        console.log(this.state.bookData)
    }

    refresh(){
        this.setState({refresh1:true})
        console.log("hii")
    }
    stopPage(){
        this.setState({refresh1:false})
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

    render() {
        return (
            <>
                <Header refresh={this.state.refresh1} stopRefresh={()=>this.stopPage()} username={this.state.userData.name}/>
                <div className="books-sort">
                    <h3 className="heading">Books<span className="book-count">({this.state.bookData.length} Items)</span></h3>
                    {/* <select className="sort-box">
                        <option selected value="dafault">Sort by relevence</option>
                        <option value="Price:Low to High">Price:Low to High</option>
                        <option value="Price:High to Low">Price:High to Low</option>
                        <option value="Newest Arrival">Newest Arrival</option>
                    </select> */}
                </div>
                <div className="cards-layout">
                    <Card bookDetails={this.state.bookData} refresh={()=>this.refresh()} />
                </div>
                {/* <Pagination count={10} /> */}
                <Foot />
            </>
        )
    }
}

export default HomePage;
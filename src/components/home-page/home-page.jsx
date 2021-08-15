import React from 'react';
import '../home-page/home-page.scss';
import Card from '../card/card.jsx';
import Header from '../header/header';
import Foot from '../footer/footer';
import BookStoreService from '../../service/BookStoreService';
import Bookdata from './bookData';
class HomePage extends React.Component{

    constructor(props){
        console.log(Bookdata)
        super(props);
        this.state = {
            bookData : []
        };
        this.bookStoreService = new BookStoreService();
    }

    render() {
        return(
            <>
            <Header/>
            <div className="book-details">
                <h3 className="heading">Books <span>{Bookdata.length}</span></h3>
                
                <div style={{  display: "grid",gridTemplateColumns: "auto auto auto auto",justifyContent: "space-evenly",gridRowGap:30}}>
                {Bookdata.map(book=>(
                    
                     <Card props={book} />
                ))}
                </div>
            </div>
            <Foot/>
            </>
        )
    }
}

export default HomePage;
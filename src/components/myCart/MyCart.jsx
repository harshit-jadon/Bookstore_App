import React, {useState} from 'react'
import './MyCart.scss';
import BookDetails from './BookDetails';

export default function MyCart(props) {
    const useForceUpdate = () => {
        const [count, setCount] = useState(0)

        const increment = () => setCount(prevCount => prevCount + 1)
        return [increment, count]
    }
    const [forceUpdate] = useForceUpdate()
    const onClickHandler = e => {
        forceUpdate()
    }

    return (
        <div className='main-div'>
            <div className='other-div'>
                <div className='my-cart'>
                    <span>My Cart(2)</span>
                </div>
                {
                    JSON.parse(localStorage.getItem("cart")).map((book)=>(
                        <>
                        <div className='cart-details'>
                            <div>
                                <img src={book.image} alt='bookpic' className='card-img'/>
                            </div>
                            <div className='details-div'>
                                <BookDetails book={book} refresh={(e)=>onClickHandler(e)}/>
                            </div>
                        </div>
                        </>
                    ))
                }

                <div className='placeButton'>
                    <button className='placed-button' onClick={()=>props.openAddress(true)}>place order</button>
                </div>
            </div>
        </div>
    )
}

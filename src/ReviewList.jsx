import { useEffect, useState } from 'react';
import {fetchReviews } from './Api';
import ReviewListItem from './ReviewListItem';
import CategoryMenu from './CategoryMenu';

export default function ReviewList ({categoryName}){
    useEffect(() => {
        fetchReviews().then((data) => {
            setReviews(data);
        }).catch((err) => {
            alert(err);
        })
    }, [])
    const [reviews, setReviews] = useState([])
    
    return(
        <section>
            <CategoryMenu />
            <h1 id="categoryTitle" className='categoryTitle'>All Reviews</h1>
            <ul className='reviewList'>
                {reviews.map((review) => {
                        return(
                            <ReviewListItem key={review.review_id} review={review}/>
                        )
                })}
            </ul>
        </section>
    );
}
import { useEffect, useState } from 'react';
import fetchReviews from './Api';
import ReviewListItem from './ReviewListItem';

export default function ReviewList (){
    useEffect(() => {
        fetchReviews().then((data) => {
            setReviews(data);
        })
    }, [])

    const [reviews, setReviews] = useState([])
    return(
        <section>
            <h2>Reviews</h2>
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
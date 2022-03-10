import { useEffect, useState } from 'react';
import {fetchReviews, fetchCategories} from './Api';
import ReviewListItem from './ReviewListItem';
import { Link, useParams } from 'react-router-dom';

export default function ReviewList ({categoryName}){
    useEffect(() => {
        fetchReviews().then((data) => {
            setReviews(data);
        }).catch((err) => {
            alert(err);
        })
    }, [])
    useEffect(() => {
        fetchCategories().then((data) => {
            setCategories(data);
        }).catch((err) => {
            alert(err);
        })
    }, [])
    const [reviews, setReviews] = useState([])
    const [categories, setCategories] = useState([])
    
    return(
        <section>
            <h2>Reviews</h2>
            <ul className='categoryList' id="categoryList">
                <li className='categoryList-item'>
                    <a href="#">
                        All reviews
                    </a>
                </li>
                {/* This map may need changing down the line */}
                {categories.map((category) => {
                    return(
                        <li key={category.slug} className='categoryList-item'>
                            <Link to={`/categories/${category.slug}`}>
                                {category.slug}
                            </Link>
                        </li>
                    )
                })}
                {/* This map may need changing down the line */}
            </ul>
            <h2 id="categoryTitle" className='categoryTitle'>All Reviews</h2>
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
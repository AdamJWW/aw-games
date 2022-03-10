import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchReviewsByCategory } from "./Api";
import CategoryMenu from "./CategoryMenu";
import ReviewListItem from "./ReviewListItem";

export default function CategoryList() {
    const [reviews, setReviews] = useState([])
    const { catName } = useParams();

    useEffect(() => {
        fetchReviewsByCategory(catName).then((res) => {
            setReviews(res);
        }).catch((err) => {
            alert(err);
        })
    }, [catName])
    return (
        <>
            <CategoryMenu />
            <section>
                <h1 id="categoryTitle" className='categoryTitle'>{catName}</h1>
                <ul className='reviewList'>
                    {reviews.map((review) => {
                        return (
                            <ReviewListItem key={review.review_id} review={review}/>
                            )
                        })}
                </ul>
            </section>
        </>
    )
}
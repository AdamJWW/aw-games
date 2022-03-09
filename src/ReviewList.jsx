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

    const categoryUrlName = useParams();
    const categoryParams = categoryUrlName.categoryName;
    const displayCategory = (compCat) => {
        console.log(compCat)
        return compCat[0].replace(/-/g, ' ')
    }

    const [reviews, setReviews] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([categoryParams])

    const handleCategoryChange = (categorySlug) => {
        setSelectedCategory([categorySlug])
    }
    
    return(
        <section>
            <h2>Reviews</h2>
            <ul className='categoryList' id="categoryList">
                <li className='categoryList-item'>
                    <a href="#" onClick={(e) => {
                        handleCategoryChange('all-reviews')
                        }}>
                        All reviews
                    </a>
                </li>
                {/* This map may need changing down the line */}
                {categories.map((category) => {
                    return(
                        <li key={category.slug} className='categoryList-item'>
                            <Link to={`/reviews/${category.slug}`} onClick={() => {
                                handleCategoryChange(category.slug)
                            }}>
                                {category.slug}
                            </Link>
                        </li>
                    )
                })}
                {/* This map may need changing down the line */}
            </ul>
            <h2 id="categoryTitle" className='categoryTitle'>{displayCategory(selectedCategory)}</h2>
            <ul className='reviewList'>
                {reviews.map((review) => {
                    if (review.category === selectedCategory[0]) {
                        return(
                            <ReviewListItem key={review.review_id} review={review}/>
                        )
                        
                    } else if (selectedCategory[0] === 'all-reviews') {
                        return(
                            <ReviewListItem key={review.review_id} review={review}/>
                        )
                    }
                })}
            </ul>
        </section>
    );
}
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchReviewById } from "./Api";

export default function SingleReview() {
    const [review, setReview] = useState([]);
    const { reviewID } = useParams();

    useEffect(() => {
        fetchReviewById(reviewID).then((res) => {
          setReview(res);
        });
      }, [reviewID]);

      const bgImg = {backgroundImage: `url(${review.review_img_url})`}

      return (
          <section id={`singleReview${reviewID}`}>
              <div className='singleReview-header' style={bgImg}>
                  <div className='singleReview-header-banner'>
                        <div className='container'>
                            <h1>{review.title}</h1>
                        </div>
                  </div>
              </div>
              <div className='singleReview-body'>
                <div className='container'>
                    <p>{review.review_body}</p>
                </div>
              </div>
              <div className='singleReview-footer'>
                <Link to="/reviews">
                    Go back to all reviews
                </Link>
              </div>
          </section>
      )
}
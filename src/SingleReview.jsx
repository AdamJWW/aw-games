import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchReviewById, fetchCommentByReview } from "./Api";
import CommentListItem from './CommentListItem';

export default function SingleReview() {
    const [review, setReview] = useState([]);
    const [comments, setComments] = useState([]);

    const { reviewID } = useParams();

    useEffect(() => {
        fetchReviewById(reviewID).then((res) => {
          setReview(res);
        });
      }, [reviewID]);

      useEffect(() => {
        fetchCommentByReview(reviewID).then((res) => {
          setComments(res);
        })
      }, [reviewID])

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
              <div className='commentSection container'>
                  <ul>
                  {comments.map((comment) => {
                        return(
                            <CommentListItem key={comment.comment_id} comment={comment}/>
                        )
                  })}
                  </ul>
              </div>
          </section>
      )
}
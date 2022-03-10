import { Link } from 'react-router-dom';

export default function ReviewListItem ({review}) {
    const bgImg = {backgroundImage: `url(${review.review_img_url})`}
    const previewBody = shortenBody()
    function shortenBody() {
        if (review.review_body.length > 150) {
            return review.review_body.substring(0,150) + '...';
        } else {
            return review.review_body.substring(0,150);
        }
    }
    return (
        <li className="reviewList-item">
                <div className="reviewList-item-card">
                    <div className="reviewList-item-header" style={bgImg}>
                    </div>
                    <div className="reviewList-item-body">
                        <div className="reviewList-item-body_header">
                            <h4>{review.title}</h4>
                            <h4 className="reviewScore">{review.votes}</h4>
                        </div>
                        <p>{previewBody}</p>
                        <Link to={`/reviews/${review.review_id}`}>
                            <button>Read more!</button>
                        </Link>
                    </div>
                </div>
            </li>
    )
}
import axios from "axios";

const baseApi = axios.create({
  baseURL: 'https://adams-bg-reviews.herokuapp.com/api/',
});

const fetchReviews = (categoryName) => {
  return (
    baseApi.get('reviews', {
      params: {
        category: categoryName,
      },
    },)
    .then((res) => {
      return res.data.reviews;
    })
    .catch((err) => {
      alert(err);
    })
    )
};

const fetchCategories = () => {
  return (
    baseApi.get('categories')
    .then((res) => {
      return res.data.categories;
    })
    )
};

const fetchReviewById = (review_id) => {
  return (
    baseApi.get(`reviews/${review_id}`)
    .then((res) => {
      return res.data.review;
    })
    .catch((err) => {
      alert(err);
    })
  )
}

const fetchCommentByReview = (review_id) => {
  return (
    baseApi.get(`reviews/${review_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      alert(err);
    })
  )
}



export {fetchReviews, fetchCategories, fetchReviewById, fetchCommentByReview};

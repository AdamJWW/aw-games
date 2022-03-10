import axios from "axios";

const baseApi = axios.create({
  baseURL: 'https://adams-bg-reviews.herokuapp.com/api/',
});

const fetchReviews = () => {
  return (
    baseApi.get('reviews')
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

export {fetchReviews, fetchCategories, fetchReviewById};

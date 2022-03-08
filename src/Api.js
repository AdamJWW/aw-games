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

export default fetchReviews;

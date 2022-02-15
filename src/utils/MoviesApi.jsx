import axios from 'axios';

// more populare film
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const trendingMovies = () => {
  axios.defaults.params = {
    api_key: 'b0be04a794960ce58c426d9c28662f54',
  };
  return axios
    .get('trending/all/day')
    .then(({ data }) => data.results)
    .catch(err => {
      throw err;
    });
};

// /3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export const searchMovies = () => {
  axios.defaults.params = {
    api_key: 'b0be04a794960ce58c426d9c28662f54',
  };
  return axios
    .get('3/search/movie?&language=en-US&page=1&include_adult=false')
    .then(({ data }) => data.hits)
    .catch(err => {
      throw err;
    });
};

// Details about movie

export const getMovieDetails = id => {
  axios.defaults.params = {
    api_key: 'b0be04a794960ce58c426d9c28662f54',
    id,
    language: 'en-US',
  };
  return axios
    .get(`movie/${id}?&`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

// Info about actors

export const getMovieCredits = id => {
  axios.defaults.params = {
    api_key: 'b0be04a794960ce58c426d9c28662f54',
    language: 'en-US',
    id,
  };
  return axios
    .get(`movie/${id}/credits?&`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

// /3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export const getMovieReviews = () => {
  axios.defaults.params = {
    api_key: 'b0be04a794960ce58c426d9c28662f54',
  };
  return axios
    .get('3/search/movie?&language=en-US&page=1&include_adult=false')
    .then(({ data }) => data.hits)
    .catch(err => {
      throw err;
    });
};

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

///search   Movies

export const searchMovies = query => {
  axios.defaults.params = {
    api_key: 'b0be04a794960ce58c426d9c28662f54',
    language: 'en-US',
    include_adult: false,
    page: 1,
    query,
  };
  return axios
    .get(`search/movie`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

// Details about movie

export const getMovieDetails = id => {
  axios.defaults.params = {
    api_key: 'b0be04a794960ce58c426d9c28662f54',
    language: 'en-US',
  };
  return axios
    .get(`movie/${id}`)
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
    .get(`movie/${id}/credits`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

// Info about Reviews

export const getMovieReviews = id => {
  axios.defaults.params = {
    api_key: 'b0be04a794960ce58c426d9c28662f54',
    id,
    language: 'en-US',
    page: 1,
  };
  return axios
    .get(`movie/${id}/reviews`)
    .then(res => res.data.results)
    .catch(err => {
      throw err;
    });
};

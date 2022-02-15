import axios from 'axios';

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

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

// /3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getMovieDetails = id => {
  // console.log(id);
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

// /3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export const getMovieCredits = () => {
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

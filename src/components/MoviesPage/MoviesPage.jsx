import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchMovies } from 'utils/MoviesApi';
import s from './MoviesPage.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [input, setinput] = useState('');
  const [request, setRequest] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setinput(e.target.value);
  };
  const setSearch = input => {
    history.push({ pathname: '/movies', search: '?query=' + input });
  };

  const parsed = qs.parse(location.search);
  const { query } = parsed;

  useEffect(() => {
    query &&
      searchMovies(query)
        .then(request => {
          if (request.results.length === 0) {
            setError('Please enter a valid request');
          }
          setRequest(request.results);
        })
        .catch(error => setError(error));
  }, [query]);

  useEffect(() => {
    error && Notify.failure(error);
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(input);
    setinput('');
    if (input.trim() === '') {
      return alert('Entre name');
    }
    setError(null);
  };

  return (
    <>
      <form className={s.wrepper} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter film name"
        />
        <button className={s.btn}>Search</button>
      </form>
      <MoviesList movies={request} />
    </>
  );
};

export default MoviesPage;

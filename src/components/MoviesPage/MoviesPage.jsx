import MoviesList from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchMovies } from 'utils/MoviesApi';
import s from './MoviesPage.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const MoviesPage = () => {
  const history = useHistory();
  const [input, setinput] = useState('');
  const [request, setRequest] = useState(null);

  const handleChange = e => {
    setinput(e.target.value);
  };
  const setSearch = input => {
    history.push({ pathname: '/movies', search: '?query=' + input });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(input);
    searchMovies(input)
      .then(request => setRequest(request.results))
      .catch(error => console.log(error));

    if (input.trim() === '') {
      return alert('Entre name');
    }
    setinput('');

    // if (request === null || request.length === 0) {
    //   // history.push('/movies');
    //   Notify.failure('Please enter a valid request');
    //   return;
    // }
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

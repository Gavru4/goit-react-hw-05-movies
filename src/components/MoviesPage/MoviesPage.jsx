import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchMovies } from 'utils/MoviesApi';
import s from './MoviesPage.module.css';

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

    setinput('');
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

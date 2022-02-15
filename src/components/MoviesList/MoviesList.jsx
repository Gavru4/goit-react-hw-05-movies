import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { trendingMovies } from '../../utils/MoviesApi';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    trendingMovies()
      .then(movies => setMovies(movies))
      .catch(eror => console.log(eror));
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(el => (
          <li key={el.id}>
            <Link to={'/movies/' + el.id}>{el?.title || el.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;

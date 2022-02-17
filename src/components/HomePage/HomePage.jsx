import MoviesList from 'components/MoviesList/MoviesList';
import s from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { trendingMovies } from '../../utils/MoviesApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    trendingMovies()
      .then(movies => setMovies(movies))
      .catch(eror => console.log(eror));
  }, []);
  return (
    <>
      <h1 className={s.title}>Trending Today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;

import MoviesList from 'components/MoviesList/MoviesList';
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
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMovieDetails } from 'utils/MoviesApi';

const MovieDetailsPage = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/w400';

  const [oneMovi, setOneMovi] = useState(null);

  const { moviesId } = useParams();

  useEffect(() => {
    getMovieDetails(moviesId)
      .then(data => setOneMovi(data))
      .catch(eror => console.log(eror));
  }, [moviesId]);

  return (
    oneMovi && (
      <>
        <Link to="/">Go back</Link>
        <div>
          <div>
            <img src={imgUrl + oneMovi.poster_path} alt="" />
          </div>
          <h2>{oneMovi.title}</h2>
          <p>User Score: {oneMovi.vote_average}</p>
          <h3>Owerview</h3>
          <p>{oneMovi.overview}</p>
          <h3>Genders</h3>
          {oneMovi.genres.map(el => (
            <p key={el.id}> {el.name}</p>
          ))}
        </div>
        <div>
          <h2>Additional information</h2>
          <Link to={`/movies/${moviesId}/cast`}>Cast</Link>
          <Link to={`/movies/${moviesId}/reviews`}>Reviews</Link>
        </div>
        <Route path={'/movies/:movieId/reviews'}>
          <Reviews />
        </Route>
        <Route path={'/movies/:movieId/cast'}>
          <Cast />
        </Route>
      </>
    )
  );
};

export default MovieDetailsPage;
